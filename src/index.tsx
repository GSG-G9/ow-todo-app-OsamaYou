import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { RouteConfig, renderRoutes } from 'react-router-config';

import routes from './routes';

const renderMethod = ReactDOM.render;
const render = (Routes: RouteConfig[]) => renderMethod(
  <Router>
    {renderRoutes(Routes)}
  </Router>,
  document.getElementById('root'),
);

render(routes as RouteConfig[]);
