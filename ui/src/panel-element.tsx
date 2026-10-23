import "./styles/globals.css";
import React from "react";
import ReactDOM from "react-dom/client";

import { PanelErrorBoundary } from "./components/PanelErrorBoundary";
import { AppRoot } from "./app/AppRoot";
import type { HassLike } from "./api/dialog-api";

const ELEMENT_NAME = "ha-dialog-ui-panel";
const STYLE_ID = "ha-dialog-ui-style";

class DialogCustomUiPanel extends HTMLElement {
  private root?: ReactDOM.Root;
  private container?: HTMLDivElement;
  private layoutObserver?: ResizeObserver;
  private updateViewport = () => {
    const top = Math.max(0, this.getBoundingClientRect().top + window.scrollY);
    this.style.setProperty("--ha-dialog-ui-available-height", `${Math.max(0, window.innerHeight - top)}px`);
  };
  private resume = () => {
    if (document.visibilityState !== "hidden" && this.isConnected) {
      this.updateViewport();
      this.loadStyles();
      this.render();
    }
  };
  private hassValue?: HassLike | null;
  private renderTimer?: number;

  private ensureShadowRoot(): ShadowRoot {
    if (!this.shadowRoot) {
      this.attachShadow({ mode: "open" });
    }
    return this.shadowRoot as ShadowRoot;
  }

  set hass(hass: HassLike | null | undefined) {
    this.hassValue = hass;

    if (this.renderTimer !== undefined) {
      return;
    }

    this.renderTimer = window.setTimeout(() => {
      this.renderTimer = undefined;
      this.render();
    }, 250);
  }

  get hass() {
    return this.hassValue;
  }

  connectedCallback() {
    this.updateViewport();
    window.addEventListener("resize", this.updateViewport);
    this.layoutObserver = new ResizeObserver(this.updateViewport);
    if (this.parentElement) this.layoutObserver.observe(this.parentElement);
    document.addEventListener("visibilitychange", this.resume);
    window.addEventListener("pageshow", this.resume);
    this.ensureShadowRoot();
    this.loadStyles();
    this.render();
  }

  disconnectedCallback() {
    window.removeEventListener("resize", this.updateViewport);
    this.layoutObserver?.disconnect();
    this.layoutObserver = undefined;
    document.removeEventListener("visibilitychange", this.resume);
    window.removeEventListener("pageshow", this.resume);
    if (this.renderTimer !== undefined) {
      window.clearTimeout(this.renderTimer);
      this.renderTimer = undefined;
    }

    queueMicrotask(() => {
      if (this.isConnected) return;
      this.root?.unmount();
      this.root = undefined;
    });
  }

  private loadStyles() {
    const shadow = this.ensureShadowRoot();
    if (shadow.getElementById(STYLE_ID)) return;

    const style = document.createElement("style");
    style.id = STYLE_ID;
    style.setAttribute("data-dialog-ui", "true");
    style.textContent = "__HA_DIALOG_UI_BUNDLED_CSS__";
    shadow.appendChild(style);
  }

  private render() {
    if (!this.isConnected) return;

    const shadow = this.ensureShadowRoot();

    if (!this.root) {
      if (!this.container) {
        this.container = document.createElement("div");
        shadow.appendChild(this.container);
      }
      this.root = ReactDOM.createRoot(this.container);
    }

    this.root.render(
      <React.StrictMode>
        <PanelErrorBoundary>
          <AppRoot hass={this.hassValue} />
        </PanelErrorBoundary>
      </React.StrictMode>
    );
  }
}

if (!customElements.get(ELEMENT_NAME)) {
  customElements.define(ELEMENT_NAME, DialogCustomUiPanel);
}
