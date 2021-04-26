import { RouteConfig } from 'react-router-config';

import App from '../app';
import NotFound from '../pages/NotFound';

export default [
  {
    component: App,
    routes: [
      {
        component: NotFound,
      },
    ],
  },
] as RouteConfig[];
