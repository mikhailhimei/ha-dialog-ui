import { Component, type ErrorInfo, type ReactNode } from "react";
import { useInRouterContext } from "react-router-dom";
import { Menu } from "lucide-react";
import { t } from "../i18n";
import { Button } from "./ui/Button/Button";
import { NavigationTabs } from "./NavigationTabs/NavigationTabs";
import { MobileHeader } from "./MobileHeader/MobileHeader";

function RecoveryPanel({ retry }: { retry: () => void }) {
  const routed = useInRouterContext();
  let theme = "dark";
  try {
    theme = localStorage.getItem("ha-dialog-ui-theme") || "dark";
  } catch {
    /* Recovery also works when storage is unavailable. */
  }
  return (
    <div
      className="appShell panelRecovery panelRenderRecovery"
      data-theme={theme}
    >
      <div className="panelRecoveryNavigation">
        {routed ? (
          <>
            <NavigationTabs />
            <MobileHeader title={t("Панель диалога")} />
          </>
        ) : (
          <>
            <Button
              variant="ghost"
              aria-label={t("Открыть меню Home Assistant")}
              onClick={(event) =>
                event.currentTarget.dispatchEvent(
                  new CustomEvent("hass-toggle-menu", {
                    bubbles: true,
                    composed: true,
                  }),
                )
              }
            >
              <Menu size={22} />
            </Button>
            <nav aria-label={t("Разделы панели")}>
              {[
                ["/", "Главная"],
                ["/timer", "Таймеры"],
                ["/alarm", "Будильники"],
                ["/monitor", "Радионяня"],
                ["/settings", "Настройки"],
              ].map(([path, label]) => (
                <a
                  key={path}
                  href={`#${path}`}
                  onClick={(event) => {
                    event.preventDefault();
                    window.location.hash = path;
                    retry();
                  }}
                >
                  {t(label)}
                </a>
              ))}
            </nav>
          </>
        )}
      </div>
      <main className="panelRecoveryContent">
        <div role="alert" className="panelRecoveryMessage">
          <p>{t("Не удалось открыть панель. Попробуйте ещё раз.")}</p>
          <Button onClick={retry}>{t("Открыть повторно")}</Button>
        </div>
      </main>
    </div>
  );
}

interface BoundaryProps {
  children: ReactNode;
  resetKey?: string;
}

export class PanelErrorBoundary extends Component<
  BoundaryProps,
  { failed: boolean }
> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  private retry = () => this.setState({ failed: false });
  private routeChanged = () => {
    if (this.state.failed && this.props.resetKey === undefined) this.retry();
  };
  componentDidMount() {
    window.addEventListener("hashchange", this.routeChanged);
  }
  componentWillUnmount() {
    window.removeEventListener("hashchange", this.routeChanged);
  }
  componentDidUpdate(previous: BoundaryProps) {
    if (this.state.failed && previous.resetKey !== this.props.resetKey)
      this.retry();
  }
  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error(
      "[ha_dialog_ui] Panel render failed",
      error,
      info.componentStack,
    );
  }
  render() {
    return this.state.failed ? (
      <RecoveryPanel retry={this.retry} />
    ) : (
      this.props.children
    );
  }
}
