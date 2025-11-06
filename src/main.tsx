import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Home from './pages/Home/Home';
import { createRootRoute, createRoute, createRouter, RouterProvider } from '@tanstack/react-router';
import { OSA } from './pages/OSA';
import { Find } from './pages/Find';
import { Contact } from './pages/Contact';
import { Speach } from './pages/Speach';

const rootRoute = createRootRoute();

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: () => <Home />,
});

const osaRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/osa',
  component: () => <OSA />,
});

const findRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/hitta-hit',
  component: () => <Find />,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/kontakt',
  component: () => <Contact />,
});

const speachRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tal',
  component: () => <Speach />,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  osaRoute,
  findRoute,
  contactRoute,
  speachRoute,
]);
const router = createRouter({ routeTree });

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
