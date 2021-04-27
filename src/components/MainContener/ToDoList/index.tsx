import { memo } from 'react';
import { ToDo } from '../../../services/jsonPlaceholder';
import ToDoItem from '../ToDoItem';

interface Props {
  toDoList: ToDo[];
}

const ToDoList = ({ toDoList }: Props) => (
  <>
    {toDoList.map((toDoData) => (
      <ToDoItem toDoData={toDoData} />
    ))}
  </>
);

export default memo(ToDoList);
