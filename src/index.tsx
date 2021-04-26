import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { RouteConfig, renderRoutes } from 'react-router-config';

import routes from './routes';
import createStore from './store';

const { store } = createStore();

const renderMethod = ReactDOM.render;
const render = (Routes: RouteConfig[]) => renderMethod(
  <Provider store={store}>
    <Router>
      {renderRoutes(Routes)}
    </Router>
  </Provider>,
  document.getElementById('root'),
);

render(routes as RouteConfig[]);
