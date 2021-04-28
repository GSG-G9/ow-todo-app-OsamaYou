import { useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { addToDo, ToDo } from '../../../services/jsonPlaceholder';
import { UpdateToDoListIfNeed } from '../../../store/toDoList';
import { AppState } from '../../../store';
import { Loading } from '../..';

import styles from './styles.module.css';

const AddToDo = (): JSX.Element => {
  const [radioValue, setRadioValue] = useState(false);
  const [textValue, setTextValue] = useState('');
  const [radioLoading, setRadioLoading] = useState(false);

  const dispatch = useDispatch();
  const { items } = useSelector(
    ({ toDoList }: AppState) => toDoList,
    shallowEqual,
  );

  const onRadioBtnClick = () => {
    setRadioValue(!radioValue);
  };

  const onTextInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    setTextValue(e.currentTarget.value);
  };

  const onTextInputKeyDown = async (e: { key: string; }) => {
    if (e.key === 'Enter') {
      setRadioLoading(true);
      const { error, data } = await addToDo(textValue, radioValue);

      if (error) {
        setRadioLoading(false);
      } else {
        dispatch(UpdateToDoListIfNeed([data as ToDo, ...items]));

        setRadioValue(false);
        setTextValue('');
        setRadioLoading(false);
      }
    }
  };

  return (
    <div className={styles.AddToDo}>
      <div>
        {radioLoading ? <Loading /> : <input type="radio" onClick={onRadioBtnClick} onKeyDown={onTextInputKeyDown} defaultChecked={radioValue} />}
      </div>

      <input type="text" placeholder="Add your task" onChange={onTextInputChange} onKeyDown={onTextInputKeyDown} value={textValue} />
    </div>
  );
};

export default AddToDo;
