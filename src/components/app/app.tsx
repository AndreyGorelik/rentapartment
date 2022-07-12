import WelcomeScreen from '../../pages/welcome-screen/welcome-screen';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute, AuthStatus } from '../statuses';
import React from 'react';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import RoomScreen from '../../pages/room-screen/room-screen';
import { PrivateRouteFavorites, PrivateRouteLogin } from '../private-route/private-route';

type AppScreenProps = {
  flatCount: number;
}

function App({ flatCount }: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<WelcomeScreen flatCount={flatCount} />} />
        <Route path={AppRoute.Favorites} element={
          <PrivateRouteFavorites authStatus={AuthStatus.Auth}>
            <FavoritesScreen />
          </PrivateRouteFavorites>

        }
        />

        <Route path={AppRoute.Login} element={
          <PrivateRouteLogin authStatus={AuthStatus.Auth}>
            <LoginScreen />
          </PrivateRouteLogin>
        }
        />

        <Route path={AppRoute.Room} element={<RoomScreen />} />
        <Route path='*' element={<NotFoundScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
