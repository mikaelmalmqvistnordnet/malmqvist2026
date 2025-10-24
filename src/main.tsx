import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Home from './Home';
import { createRootRoute, createRoute, createRouter, RouterProvider } from '@tanstack/react-router';

const rootRoute = createRootRoute();

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: () => <Home />,
});

const osaRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/osa',
  component: () => <div>Please OSA now!</div>,
});

const routeTree = rootRoute.addChildren([indexRoute, osaRoute]);
const router = createRouter({ routeTree });

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
