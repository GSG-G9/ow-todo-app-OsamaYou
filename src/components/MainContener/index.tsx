import ToDoList from './ToDoList';
import ToDoAction from './ToDoAction';
import AddToDo from './AddToDo';

import styles from './styles.module.css';

const MainContener = (): JSX.Element => (
  <main className={styles.Main}>
    <AddToDo />
    <div className={styles.ListContener}>
      <ToDoList toDoList={[{ id: '1', content: 'It just test', state: false }]} />
      <ToDoAction />
    </div>
  </main>
);

export default MainContener;
