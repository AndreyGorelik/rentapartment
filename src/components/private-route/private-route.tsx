import {Navigate} from 'react-router-dom';
import {AppRoute, AuthStatus} from '../statuses';

type PrivateRouteProps = {
  authStatus: AuthStatus;
  children: JSX.Element;
}

function PrivateRouteFavorites(props: PrivateRouteProps): JSX.Element {
  const {authStatus, children} = props;

  return (
    authStatus === AuthStatus.Auth
      ? children
      : <Navigate to={AppRoute.Login} />
  );
}

function PrivateRouteLogin(props: PrivateRouteProps): JSX.Element {
  const {authStatus, children} = props;

  return (
    authStatus === AuthStatus.Auth
      ? <Navigate to={AppRoute.Main}/>
      : children
  );
}

export {PrivateRouteFavorites, PrivateRouteLogin};
