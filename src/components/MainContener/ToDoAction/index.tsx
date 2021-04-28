import { useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../../store';

import { UpdateFilterIfNeed } from '../../../store/toDoList';

import styles from './styles.module.css';

const ToDoAction = (): JSX.Element => {
  const [activeBtn, setActiveBtn] = useState({ all: true, active: false, completed: false });
  const dispatch = useDispatch();
  const { items } = useSelector(
    ({ toDoList }: AppState) => toDoList,
    shallowEqual,
  );

  const onActionClicked = (action: string) => () => {
    dispatch(UpdateFilterIfNeed(action));
    setActiveBtn({
      all: false, active: false, completed: false, [action]: true,
    });
  };

  return (
    <div className={styles.ToDoAction}>
      <span>
        {`${items.length} items left`}
      </span>
      <div className={styles.ToDoAction__Center}>
        <button className={activeBtn.all ? styles.ButtonClicked : ''} type="button" onClick={onActionClicked('all')} disabled={activeBtn.all}>All</button>
        <button className={activeBtn.active ? styles.ButtonClicked : ''} type="button" onClick={onActionClicked('active')} disabled={activeBtn.active}>Active</button>
        <button className={activeBtn.completed ? styles.ButtonClicked : ''} type="button" onClick={onActionClicked('completed')} disabled={activeBtn.completed}>Completed</button>
      </div>
      <button type="button">
        Clear Completed
      </button>
    </div>
  );
};

export default ToDoAction;
