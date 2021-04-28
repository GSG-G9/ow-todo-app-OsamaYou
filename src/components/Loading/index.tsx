import { ReactComponent as LoadingSpin } from '../../static/icons/spin.svg';

import styles from './styles.module.css';

const Loading = (): JSX.Element => (
  <div className={styles.Loading}>
    <LoadingSpin />
  </div>
);

export default Loading;
