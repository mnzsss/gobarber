import React from 'react';
import { RouteProps, Route, Redirect } from 'react-router-dom';

import { useAuth } from '../hooks/auth';

interface MyRouteProps extends RouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const MyRoute: React.FC<MyRouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const { user } = useAuth();

  return (
    <Route
      {...rest}
      render={({ location }) => {
        return isPrivate === !!user ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : '/dashboard',
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default MyRoute;
