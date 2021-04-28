import { shallowEqual, useSelector } from 'react-redux';
import { RouteConfig, renderRoutes } from 'react-router-config';
import { Helmet } from 'react-helmet';

import { AppState } from '../store';
import config from '../config';

import 'normalize.css/normalize.css';
import '../theme/global.css';
import styles from './styles.module.css';

interface Route {
  route: { routes: RouteConfig[] };
}

const App = ({ route }: Route): JSX.Element => {
  const { themeMode } = useSelector(
    ({ theme }: AppState) => theme,
    shallowEqual,
  );

  return (
    <div className={`${styles.App} ${themeMode}`}>
      <Helmet {...config.APP} />
      {renderRoutes(route.routes)}
    </div>
  );
};

export default App;
