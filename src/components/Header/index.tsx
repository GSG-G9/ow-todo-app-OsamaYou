import { ReactComponent as Sun } from '../../static/icons/icon-sun.svg';

import styles from './styles.module.css';

const Footer = (): JSX.Element => (
  <header className={styles.Header}>
    <h1>T O D O</h1>
    <Sun />
  </header>
);

export default Footer;
