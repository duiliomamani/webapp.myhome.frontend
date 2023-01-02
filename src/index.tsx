import { Auth0Provider } from '@auth0/auth0-react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import reportWebVitals from './reportWebVitals';

/* FontAwesome */
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

import App from './App';
import Dashboard from './pages/root/dashboard/dashboard';
import Auth0Protected from "./pages/shared/auth/auth.protected";
import ErrorPage from './pages/shared/common/error';
import Onboarding from "./pages/shared/onboarding/onboarding";

library.add(far, fas, fab);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: "/signin-auth0",
    element: <Auth0Protected />,
    errorElement: <ErrorPage />
  },
  {
    path: "/dashboard",
    element: <Auth0Protected><Dashboard /></Auth0Protected>,
    errorElement: <ErrorPage />
  },
  {
    path: "/onboarding",
    element: <Auth0Protected><Onboarding /></Auth0Protected>,
    errorElement: <ErrorPage />
  }
]);

root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH0_DOMAIN ?? ""}
      clientId={process.env.REACT_APP_AUTH0_CLIENT_ID ?? ""}
      redirectUri={`${window.location.origin}/signin-auth0`}>
      <RouterProvider router={router} />
    </Auth0Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
