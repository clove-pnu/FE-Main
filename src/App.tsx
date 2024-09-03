import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import AuthProviderWrapper from './remotes/AuthProviderWrapper';
import MainLayout from './components/Layout/MainLayout';
import PrivateRouteWrapper from './remotes/PrivateRouteWrapper';
import LoginPageWrapper from './remotes/LoginPageWrapper';
import SignupPageWrapper from './remotes/SignupPageWrapper';
import OwnerPageWrapper from './remotes/OwnerPageWrapper';
import TemplatePageWrapper from './remotes/TemplatePageWrapper';
import PlayDetailPageWrapper from './remotes/PlayDetailPageWrapper';

export default function App() {
  return (
    <AuthProviderWrapper>
      <BrowserRouter basename="/page/main">
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<MainPage />} />
            {/* <Route path="/play/:pid" element={<PlayDetailTicketingPage />} /> */}

            {/* Need Authentication */}
            <Route element={<PrivateRouteWrapper />}>
              {/* Deployment */}
              <Route
                path="/test"
                element={(
                  <div>This is Private Page!</div>
                )}
              />
              <Route
                path="/owner"
                element={<OwnerPageWrapper />}
              />
              <Route
                path="/owner/deploy"
                element={<TemplatePageWrapper />}
              />

              {/* Deployment Template */}
              {/* <Route path="/owner/deploy/concert" element={<ConcertDeployPage />} />
              <Route path="/owner/deploy/sports" element={<ConcertDeployPage />} />
              <Route path="/owner/deploy/exhibition" element={<ConcertDeployPage />} /> */}

              {/* Play Detail (seller) */}
              <Route
                path="/owner/playDetail/:pid"
                element={<PlayDetailPageWrapper />}
              />
              {/* <Route path="/owner/playMonitor/:pid" element={<PlayMonitorPage />} />
              <Route path="/owner/serverMonitor/:pid" element={<ServerMonitorPage />} />
              <Route path="/owner/playConfiguration/:pid" element={<PlayConfigurationPage />} /> */}

              {/* Play Ticketing */}
              {/* <Route path="/play/:pid/ticketing" element={<PlayTicketingPage />} /> */}
            </Route>
          </Route>
          {/* Authentication */}
          <Route
            path="/login"
            element={<LoginPageWrapper />}
          />
          <Route
            path="/signup"
            element={<SignupPageWrapper />}
          />
        </Routes>
      </BrowserRouter>
    </AuthProviderWrapper>
  );
}
