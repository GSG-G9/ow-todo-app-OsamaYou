import styles from './styles.module.css';

const ToDoAction = (): JSX.Element => (
  <div className={styles.ToDoAction}>
    <span>5 items left</span>
    <div className={styles.ToDoAction__Center}>
      <button type="button">All</button>
      <button type="button">Active</button>
      <button type="button">Completed</button>
    </div>
    <button type="button">
      Clear Completed
    </button>
  </div>
);

export default ToDoAction;
