import { useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { UpdateFilterIfNeed, UpdateToDoListIfNeed } from '../../../store/toDoList';
import { deleteCompletedToDo, ToDo } from '../../../services/jsonPlaceholder';
import { AppState } from '../../../store';

import styles from './styles.module.css';

const ToDoAction = (): JSX.Element => {
  const [activeBtn, setActiveBtn] = useState({ all: true, active: false, completed: false });
  const [activeList, setActiveList] = useState([] as ToDo[]);
  const [leftCont, setLeftCont] = useState(0);

  const dispatch = useDispatch();
  const { items } = useSelector(
    ({ toDoList }: AppState) => toDoList,
    shallowEqual,
  );

  useEffect(() => {
    let cont = 0;
    const list = items.filter(({ state }) => {
      if (state) {
        cont += 1;
        return false;
      }
      return true;
    });
    setActiveList(list as ToDo[]);
    setLeftCont(cont);
  }, [items]);
  const onActionClicked = (action: string) => () => {
    dispatch(UpdateFilterIfNeed(action));
    setActiveBtn({
      all: false, active: false, completed: false, [action]: true,
    });
  };

  const onClearCompletedBtnClicked = async () => {
    if (leftCont !== 0) {
      const { error } = await deleteCompletedToDo();
      if (!error) {
        dispatch(UpdateToDoListIfNeed(activeList));
      }
    }
  };

  return (
    <div className={styles.ToDoAction}>
      <span>
        {`${activeList.length} items left`}
      </span>
      <div className={styles.ToDoAction__Center}>
        <button
          className={`${activeBtn.all && styles.ButtonClicked}`}
          type="button"
          onClick={onActionClicked('all')}
          disabled={activeBtn.all}
        >
          All
        </button>
        <button
          className={`${activeBtn.active && styles.ButtonClicked}`}
          type="button"
          onClick={onActionClicked('active')}
          disabled={activeBtn.active}
        >
          Active
        </button>
        <button
          className={`${activeBtn.completed && styles.ButtonClicked}`}
          type="button"
          onClick={onActionClicked('completed')}
          disabled={activeBtn.completed}
        >
          Completed
        </button>
      </div>
      <button
        type="button"
        className={styles.clearCompletedBtn}
        onClick={onClearCompletedBtnClicked}
      >
        Clear Completed
      </button>
    </div>
  );
};

export default ToDoAction;
