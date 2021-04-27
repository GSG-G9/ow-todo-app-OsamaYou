import { FC } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { Header, MainContener, Footer } from '../../components';

import styles from './styles.module.css';

export type Props = RouteComponentProps;

const Home: FC<Props> = (): JSX.Element => (
  <div className={styles.Bg}>
    <Helmet title="Home" />
    <div className={styles.Contener}>
      <Header />
      <MainContener />
      <Footer />
    </div>

  </div>
);

export default Home;
