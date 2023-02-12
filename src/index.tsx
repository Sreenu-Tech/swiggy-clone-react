import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import * as Sentry from "@sentry/react";
import { BrowserTracing } from '@sentry/tracing';

// integrations: [new BrowserTracing()],
Sentry.init({
  dsn: "https://7471d85a9f294a7f9093f02d5742ffe7@o4504330577248256.ingest.sentry.io/4504666866319360",
  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const LocationLayout = React.lazy(() => import('./components/location/LocationLayout'));
const RestaurantLayout = React.lazy(() => import('./components/restaurants/RestaurantLayout'));
const RestaurantDetailsLayout = React.lazy(() => import('./components/restaurants-details/RestaurantDetailsLayout'));
const AccountLayout = React.lazy(() => import('./components/account/AccountLayout'));

const router = createBrowserRouter([
  {
    path: '',
    element: <App />,
    children: [
      {
        path: 'location',
        element: <Suspense fallback={<div>Loading...</div>}><LocationLayout /></Suspense>
      },
      {
        path: 'restaurants',
        element: <Suspense fallback={<div>Loading...</div>}><RestaurantLayout /></Suspense>
      },
      {
        path: 'restaurant/details/:resId',
        element: <Suspense fallback={<div>Loading...</div>}><RestaurantDetailsLayout /></Suspense>
      },
      {
        path: 'checkout',
        element: <Suspense fallback={<div>Loading...</div>}><AccountLayout /></Suspense>
      },
    ]
  }
])

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
