import styles from './styles.module.css';

const AddToDo = (): JSX.Element => (
  <div className={styles.AddToDo}>
    <input type="radio" />
    <input type="text" placeholder="Add your task" />
  </div>
);

export default AddToDo;
