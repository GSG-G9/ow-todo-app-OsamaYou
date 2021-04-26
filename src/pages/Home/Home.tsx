import { FC, memo } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import styles from './styles.module.css';

export type Props = RouteComponentProps;

const Home: FC<Props> = (): JSX.Element => (
  <div className={styles.Home}>
    <Helmet title="Home" />
    Home
  </div>
);

export default memo(Home);
