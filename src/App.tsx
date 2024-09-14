import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import AuthProviderWrapper from './remotes/AuthProviderWrapper';
import MainLayout from './components/layouts/MainLayout';
import PrivateRouteWrapper from './remotes/PrivateRouteWrapper';
import LoginPageWrapper from './remotes/LoginPageWrapper';
import SignupPageWrapper from './remotes/SignupPageWrapper';
import OwnerPageWrapper from './remotes/OwnerPageWrapper';
import TemplatePageWrapper from './remotes/TemplatePageWrapper';
import PlayDetailPageWrapper from './remotes/PlayDetailPageWrapper';
import DeployConcertPageWrapper from './remotes/DeployConcertPageWrapper';
import ServerMonitorPageWrapper from './remotes/ServerMonitorPageWrapper';
import PlayConfigurationPageWrapper from './remotes/PlayConfigurationPageWrapper';
import MyTicketPageWrapper from './remotes/MyTicketPageWrapper';

export default function App() {
  return (
    <AuthProviderWrapper>
      <BrowserRouter basename={process.env.NODE_ENV === 'production' ? '/page/main' : '/'}>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<MainPage />} />
            {/* <Route path="/play/:pid" element={<PlayDetailTicketingPage />} /> */}

            {/* Need Authentication */}
            <Route element={<PrivateRouteWrapper />}>
              {/* Deployment */}
              <Route
                path="/owner"
                element={<OwnerPageWrapper />}
              />
              <Route
                path="/owner/deploy"
                element={<TemplatePageWrapper />}
              />

              {/* Deployment Template */}
              <Route path="/owner/deploy/concert" element={<DeployConcertPageWrapper />} />
              {/* <Route path="/owner/deploy/sports" element={<ConcertDeployPage />} />
              <Route path="/owner/deploy/exhibition" element={<ConcertDeployPage />} /> */}

              {/* Play Detail (seller) */}
              <Route
                path="/owner/playDetail/:pid"
                element={<PlayDetailPageWrapper />}
              />
              {/* <Route path="/owner/playMonitor/:pid" element={<PlayMonitorPageWrapper />} /> */}
              <Route path="/owner/serverMonitor/:pid" element={<ServerMonitorPageWrapper />} />
              <Route path="/owner/playConfiguration/:pid" element={<PlayConfigurationPageWrapper />} />

              {/* My Ticket */}
              <Route path="/myTicket" element={<MyTicketPageWrapper />} />
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
