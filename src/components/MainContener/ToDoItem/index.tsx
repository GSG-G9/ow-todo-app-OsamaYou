import { useEffect, useState } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { AppState } from '../../../store';
import { ReactComponent as DeleteToDo } from '../../../static/icons/icon-cross.svg';
import { deleteToDo, ToDo, updateToDoState } from '../../../services/jsonPlaceholder';
import { ReactComponent as Loading } from '../../../static/icons/spin.svg';
import { UpdateToDoListIfNeed } from '../../../store/toDoList';

import styles from './styles.module.css';

interface Props {
  toDoData: ToDo;
}

const ToDoItem = ({ toDoData: { id, content, state }, ...rest }: Props): JSX.Element => {
  const [radioValue, setRadioValue] = useState(state);
  const [radioLoading, setRadioLoading] = useState(false);

  const dispatch = useDispatch();
  const { items } = useSelector(
    ({ toDoList }: AppState) => toDoList,
    shallowEqual,
  );

  useEffect(() => {
    setRadioValue(state);
  }, [state]);

  const onRadioBtnClick = async () => {
    setRadioLoading(true);
    const { error } = await updateToDoState(id, !state);
    if (error) {
      setRadioLoading(false);
    } else {
      const list:ToDo[] = items.map((item) => (item.id === id ? { ...item, state: !state } : item));
      dispatch(UpdateToDoListIfNeed(list));

      setRadioValue(!radioValue);
      setRadioLoading(false);
    }
  };

  const onDeleteBtnClick = async () => {
    setRadioLoading(true);
    const { error } = await deleteToDo(id);
    if (error) {
      setRadioLoading(false);
    } else {
      const list:ToDo[] = items.filter((item) => (item.id !== id));
      dispatch(UpdateToDoListIfNeed(list));

      setRadioValue(!radioValue);
      setRadioLoading(false);
    }
  };

  return (
    <div id={id} className={`${styles.ToDoItem} ${radioValue && styles.ToDoItemDone}`} {...rest}>
      {radioLoading ? <Loading /> : <input type="radio" defaultChecked={radioValue} onClick={onRadioBtnClick} />}
      <div className={styles.ToDoItemText} onClick={onRadioBtnClick} aria-hidden="true">{content}</div>
      {!radioLoading && <DeleteToDo className={styles.DeleteToDo} onClick={onDeleteBtnClick} />}
    </div>
  );
};

export default ToDoItem;
