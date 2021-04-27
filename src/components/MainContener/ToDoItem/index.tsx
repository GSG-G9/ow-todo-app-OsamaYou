import { ReactComponent as DeleteToDo } from '../../../static/icons/icon-cross.svg';
import { ToDo } from '../../../services/jsonPlaceholder';

import styles from './styles.module.css';

interface Props {
  toDoData: ToDo;
}

const ToDoItem = ({ toDoData: { id, content, status }, ...rest }: Props): JSX.Element => (
  <div id={`${id}`} className={styles.ToDoItem} {...rest}>
    <input type="radio" checked={status} />
    <p>{content}</p>
    <DeleteToDo className={styles.DeleteToDo} />
  </div>
);

export default ToDoItem;
