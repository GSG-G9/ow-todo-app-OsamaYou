import { FC } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { shallowEqual, useSelector } from 'react-redux';
import { Header, MainContener, Footer } from '../../components';

import styles from './styles.module.css';
import { AppState } from '../../store';

export type Props = RouteComponentProps;

const Home: FC<Props> = (): JSX.Element => {
  const { themeMode } = useSelector(
    ({ theme }: AppState) => theme,
    shallowEqual,
  );
  return (
    <div className={`${styles.Bg} ${styles[`${themeMode}-Bg`]}`}>
      <Helmet title="Home" />
      <div className={styles.Contener}>
        <Header />
        <MainContener />
        <Footer />
      </div>

    </div>
  );
};

export default Home;
