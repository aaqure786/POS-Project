import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
function Loading() {
  return <h2> Loading...</h2>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Suspense fallback={<Loading />}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
</Suspense>
  
);



