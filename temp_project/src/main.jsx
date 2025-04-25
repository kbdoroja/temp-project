import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


import Root from './pages/Root';
import Route1 from './pages/Route1';
import Route2 from './pages/Route1';

const router = createBrowserRouter([
  { path: '/', element: <Root />},
  { path: '/route1', element: <Route1 />},
  { path: '/route2/:id', element: <Route2 />},
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />    
  </React.StrictMode>
);



