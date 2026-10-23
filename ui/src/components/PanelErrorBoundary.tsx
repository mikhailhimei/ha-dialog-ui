import { Component, type ErrorInfo, type ReactNode } from "react";
import { t } from '../i18n';
import { Button } from './ui/Button/Button';

export class PanelErrorBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('[ha_dialog_ui] Panel render failed', error, info.componentStack);
  }

  render() {
    if (!this.state.failed) return this.props.children;
    return (
      <div role="alert" className="appShell panelRecovery" data-theme={localStorage.getItem("ha-dialog-ui-theme") || "dark"}>
        <p>{t('Не удалось открыть панель. Попробуйте ещё раз.')}</p>
        <Button onClick={() => this.setState({ failed: false })}>{t('Открыть повторно')}</Button>
      </div>
    );
  }
}
