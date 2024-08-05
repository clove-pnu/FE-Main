import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from 'auth/useAuth';
import { lazy, Suspense } from 'react';
import MainPage from './pages/common/MainPage';
import MainLayout from './components/common/Layout/MainLayout';

const LoginPage = lazy(() => import('auth/LoginPage'));
const SignupPage = lazy(() => import('auth/SignupPage'));

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter basename="/">
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<MainPage />} />
            {/* <Route path="/play/:pid" element={<PlayDetailTicketingPage />} /> */}

            {/* Need Authentication */}
            <Route element={<div>auth</div>}>
              {/* Deployment */}
              {/* <Route path="/owner" element={<OwnerPage />} />
              <Route path="/owner/deploy" element={<TemplatePage />} /> */}

              {/* Deployment Template */}
              {/* <Route path="/owner/deploy/concert" element={<ConcertDeployPage />} />
              <Route path="/owner/deploy/sports" element={<ConcertDeployPage />} />
              <Route path="/owner/deploy/exhibition" element={<ConcertDeployPage />} /> */}

              {/* Play Detail (seller) */}
              {/* <Route path="/owner/playDetail/:pid" element={<PlayDetailPage />} />
              <Route path="/owner/playMonitor/:pid" element={<PlayMonitorPage />} />
              <Route path="/owner/serverMonitor/:pid" element={<ServerMonitorPage />} />
              <Route path="/owner/playConfiguration/:pid" element={<PlayConfigurationPage />} /> */}

              {/* Play Ticketing */}
              {/* <Route path="/play/:pid/ticketing" element={<PlayTicketingPage />} /> */}
            </Route>
          </Route>
          {/* Authentication */}
          <Route
            path="/login"
            element={(
              <Suspense fallback={<div>Loading...</div>}>
                <LoginPage />
              </Suspense>
)}
          />
          <Route path="/signup" element={<Suspense fallback={<div>Loading...</div>}>
                <SignupPage />
              </Suspense>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
