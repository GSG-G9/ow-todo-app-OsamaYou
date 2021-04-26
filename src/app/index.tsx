import { Helmet } from 'react-helmet';

import config from '../config';

import styles from './styles.module.css';

const App = (): JSX.Element => (
  <div className={styles.App}>
    <Helmet {...config.APP} />
    App
  </div>
);

export default App;
