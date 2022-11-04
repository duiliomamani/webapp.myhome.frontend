import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Auth0Provider } from '@auth0/auth0-react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import React from 'react';

/* FontAwesome */
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

import App from './App';
import ErrorPage from './pages/shared/common/error';
import Dashboard from './pages/root/dashboard/dashboard';

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
    path: "/register",
    element: <Dashboard />,
  }
]);

root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH0_DOMAIN ?? ""}
      clientId={process.env.REACT_APP_AUTH0_CLIENT_ID ?? ""}
      // audience={`https://${process.env.REACT_APP_AUTH0_DOMAIN}/api/v2/`} 
      redirectUri={`${window.location.origin}/register`}>
      <RouterProvider router={router} />
    </Auth0Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
