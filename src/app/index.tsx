import { RouteConfig, renderRoutes } from 'react-router-config';
import { Helmet } from 'react-helmet';
import config from '../config';

import styles from './styles.module.css';

interface Route {
  route: { routes: RouteConfig[] };
}

const App = ({ route }: Route): JSX.Element => (
  <div className={styles.App}>
    <Helmet {...config.APP} />
    {renderRoutes(route.routes)}
  </div>
);

export default App;
