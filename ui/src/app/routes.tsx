import { NormalizationSettingsPage } from "../pages/NormalizationSettingsPage/NormalizationSettingsPage";
import { PanelErrorBoundary } from "../components/PanelErrorBoundary";
import { WhisperPromptPage } from "../pages/WhisperPromptPage/WhisperPromptPage";
import { useApiEnabled } from "../context/ApiEnabledContext";
import { ApiLogsPage } from "../pages/ApiLogsPage/ApiLogsPage";
import { useIsAdmin } from "../context/AdminContext";

import {
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import { useRemoteServerEnabled } from "../context/RemoteServerContext";
import { Loader } from "../components/ui/Loader";

import { ScriptsPage } from "../pages/ScriptActionsPage/ScriptsPage";
import { CommandMainPage } from "../pages/CommandPage/CommandMainPage/CommandMainPage";
import { CommandSubPage } from "../pages/CommandPage/CommandSubPage/CommandSubPage";
import { CommandDirectPage } from "../pages/CommandPage/CommandDirectPage/CommandDirectPage";
import { CommandDirectTemplatePage } from "../pages/CommandPage/CommandDirectTemplatePage/CommandDirectTemplatePage";
import { CommandSettingsPage } from "../pages/CommandPage/CommandSettingsPage/CommandSettingsPage";
import { DownloadsPage } from "../pages/DownloadsPage/DownloadsPage";
import { SettingsPage } from "../pages/SettingsPage/SettingsPage"
import { TimerPage } from "../pages/TimerAlarmPages/TimerPage";
import { CallsPage } from "../pages/CallsPage/CallsPage";
import { BabyMonitorPage } from "../pages/BabyMonitorPage/BabyMonitorPage";
import { AlarmPage } from "../pages/TimerAlarmPages/AlarmPage";

export const AppRoutes = () => {
  const apiEnabled = useApiEnabled();
  const isAdmin = useIsAdmin();
  const remoteEnabled = useRemoteServerEnabled();
  const { pathname } = useLocation();
  const homePath = remoteEnabled ? "/scripts" : "/commands/main";
  if ((pathname === "/commands" || pathname.startsWith("/commands/")) && remoteEnabled !== false) {
    return remoteEnabled === null ? <Loader /> : <Navigate to="/scripts" replace />;
  }
  return (
    <PanelErrorBoundary resetKey={pathname}><Routes>
      <Route path="/commands/normalization" element={isAdmin ? <NormalizationSettingsPage /> : <Navigate to={homePath} replace />} />
      <Route path="/commands/whisper" element={isAdmin ? <WhisperPromptPage /> : <Navigate to={homePath} replace />} />
      <Route path="/logs" element={apiEnabled && isAdmin ? <ApiLogsPage /> : <Navigate to={homePath} replace />} />
      <Route path="/downloads" element={isAdmin ? <DownloadsPage /> : <Navigate to={homePath} replace />} />
      <Route
        path="/"
        element={
          <Navigate
            to={homePath}
            replace
          />
        }
      />

      <Route
        path="/scripts"
        element={<ScriptsPage />}
      />

      <Route
        path="/commands"
        element={
          <Navigate
            to="/commands/main"
            replace
          />
        }
      />

      <Route
        path="/commands/main"
        element={<CommandMainPage />}
      />

      <Route
        path="/commands/sub"
        element={<CommandSubPage />}
      />

      <Route
        path="/commands/direct"
        element={
          <Navigate
            to="/commands/direct/main"
            replace
          />
        }
      />

      <Route
        path="/commands/direct/main"
        element={<CommandDirectPage />}
      />

      <Route
        path="/commands/direct/template"
        element={<CommandDirectTemplatePage />}
      />

      <Route
        path="/commands/settings"
        element={<CommandSettingsPage />}
      />

      <Route path="/monitor" element={<BabyMonitorPage />} />
      <Route path="/calls" element={<CallsPage />} />
      <Route
        path="/timer"
        element={<TimerPage />}
      />

      <Route
        path="/alarm"
        element={<AlarmPage />}
      />

      <Route 
        path='/settings'
        element= {<SettingsPage />}
      />

       <Route
        path="*"
        element={
          <Navigate
            to={homePath}
            replace
          />
        }
      />
    </Routes></PanelErrorBoundary>
  );
};
