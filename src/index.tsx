import React from 'react';
import ReactDOM from 'react-dom/client';
import AppLayout from './layouts/app-layout';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <React.Suspense>
      <AppLayout />
    </React.Suspense>
  </React.StrictMode>
);