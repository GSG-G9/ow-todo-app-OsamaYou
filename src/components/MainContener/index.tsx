import { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { fetchToDoListIfNeed } from '../../store/toDoList';
import { AppState } from '../../store';
import toDoListFilter from '../../utils/toDoListFilter';
import { Loading } from '..';

import ToDoList from './ToDoList';
import ToDoAction from './ToDoAction';
import AddToDo from './AddToDo';

import styles from './styles.module.css';

const MainContener = (): JSX.Element => {
  const dispatch = useDispatch();
  const { readyStatus, items, filter } = useSelector(
    ({ toDoList }: AppState) => toDoList,
    shallowEqual,
  );

  useEffect(() => {
    dispatch(fetchToDoListIfNeed());
  }, [dispatch]);

  const renderList = () => {
    if (!readyStatus || readyStatus === 'invalid' || readyStatus === 'request') {
      return <Loading />;
    }
    if (readyStatus === 'failure') return <p>Oops, It is failed!</p>;

    return <ToDoList toDoList={toDoListFilter(items, filter)} />;
  };

  return (
    <main className={styles.Main}>
      <AddToDo />
      <div className={styles.ListContener}>
        {renderList()}
        <ToDoAction />
      </div>
    </main>
  );
};

export default MainContener;
