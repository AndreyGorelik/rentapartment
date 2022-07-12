import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const Setting = {
  FLAT_COUNT: 5,
};


root.render(
  <React.StrictMode>
    <App
      flatCount={Setting.FLAT_COUNT}
    />
  </React.StrictMode>,
);
