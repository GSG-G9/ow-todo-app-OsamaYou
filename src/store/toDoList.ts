import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { ToDo, getToDoList } from '../services/jsonPlaceholder';
import { AppThunk, AppState } from '.';

interface ToDoList {
  readyStatus: string;
  items: ToDo[];
  error: string | null;
}

export const initialState: ToDoList = {
  readyStatus: 'invalid',
  items: [],
  error: null,
};

const toDoList = createSlice({
  name: 'toDoList',
  initialState,
  reducers: {
    getRequesting: (state: ToDoList) => {
      state.readyStatus = 'request';
    },
    getSuccess: (state, { payload }: PayloadAction<ToDo[]>) => {
      state.readyStatus = 'success';
      state.items = payload;
    },
    getFailure: (state, { payload }: PayloadAction<string>) => {
      state.readyStatus = 'failure';
      state.error = payload;
    },
  },
});

export default toDoList.reducer;
export const { getRequesting, getSuccess, getFailure } = toDoList.actions;

export const fetchToDoList = (): AppThunk => async (dispatch) => {
  dispatch(getRequesting());

  const { error, data } = await getToDoList();

  if (error) {
    dispatch(getFailure(error.message));
  } else {
    dispatch(getSuccess(data as ToDo[]));
  }
};

const shouldFetchToDoList = (state: AppState) => state.toDoList.readyStatus !== 'success';

export const fetchToDoListIfNeed = (): AppThunk => (dispatch, getState) => {
  if (shouldFetchToDoList(getState())) return dispatch(fetchToDoList());

  return null;
};
