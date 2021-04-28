import { ToDo } from '../../../services/jsonPlaceholder';
import ToDoItem from '../ToDoItem';

interface Props {
  toDoList: ToDo[];
}

const ToDoList = ({ toDoList }: Props): JSX.Element => (
  <>
    {toDoList.map((toDoData) => (
      <ToDoItem key={toDoData.id} toDoData={toDoData} />
    ))}
  </>
);

export default ToDoList;
