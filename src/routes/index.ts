import { RouteConfig } from 'react-router-config';

import App from '../app';
import NotFound from '../pages/NotFound';
import Home from '../pages/Home';

export default [
  {
    component: App,
    routes: [
      {
        path: '/',
        exact: true,
        component: Home,
      },
      {
        component: NotFound,
      },
    ],
  },
] as RouteConfig[];
