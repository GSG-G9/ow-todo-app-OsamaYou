import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { ReactComponent as LightBtn } from '../../static/icons/icon-sun.svg';
import { ReactComponent as DarkBtn } from '../../static/icons/icon-moon.svg';
import { AppState } from '../../store';

import { toggleTheme } from '../../store/theme';

import styles from './styles.module.css';

const Footer = (): JSX.Element => {
  const dispatch = useDispatch();
  const { themeMode } = useSelector(
    ({ theme }: AppState) => theme,
    shallowEqual,
  );

  const onModeBtnClick = () => dispatch(toggleTheme());
  return (
    <header className={styles.Header}>
      <h1>T O D O</h1>
      {themeMode === 'dark-mode'
        ? (
          <LightBtn
            onClick={onModeBtnClick}
            className={styles.modeBtm}
          />
        ) : (
          <DarkBtn onClick={onModeBtnClick} />
        )}
    </header>
  );
};

export default Footer;
