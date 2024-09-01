import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import MainPage from './pages/MainPage';
import AuthProviderWrapper from './remotes/AuthProviderWrapper';
import MainLayout from './components/Layout/MainLayout';
import PrivateRouteWrapper from './remotes/PrivateRouteWrapper';
import LoginPageWrapper from './remotes/LoginPageWrapper';
import SignupPageWrapper from './remotes/SignupPageWrapper';

// Deploy
const OwnerPage = lazy(() => import('deploy/OwnerPage'));
const PlayDetailPage = lazy(() => import('deploy/PlayDetailPage'));
const TemplatePage = lazy(() => import('deploy/TemplatePage'));

export default function App() {
  return (
    <AuthProviderWrapper>
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter basename="/">
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
                  element={(
                    <Suspense fallback={<div>Loading...</div>}>
                      <OwnerPage />
                    </Suspense>
)}
                />
                <Route
                  path="/owner/deploy"
                  element={(
                    <Suspense fallback={<div>Loading...</div>}>
                      <TemplatePage />
                    </Suspense>
)}
                />

                {/* Deployment Template */}
                {/* <Route path="/owner/deploy/concert" element={<ConcertDeployPage />} />
              <Route path="/owner/deploy/sports" element={<ConcertDeployPage />} />
              <Route path="/owner/deploy/exhibition" element={<ConcertDeployPage />} /> */}

                {/* Play Detail (seller) */}
                <Route
                  path="/owner/playDetail/:pid"
                  element={(
                    <Suspense fallback={<div>Loading...</div>}>
                      <PlayDetailPage />
                    </Suspense>
)}
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
      </Suspense>
    </AuthProviderWrapper>
  );
}
