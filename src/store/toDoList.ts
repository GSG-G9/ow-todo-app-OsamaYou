import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { ToDo, getToDoList } from '../services/jsonPlaceholder';
import { AppThunk, AppState } from '.';

interface ToDoList {
  readyStatus: string;
  items: ToDo[];
  filter:string;
  error: string | null;
}

export const initialState: ToDoList = {
  readyStatus: 'invalid',
  items: [],
  filter: 'all',
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
    updateFilter: (state, { payload }: PayloadAction<string>) => {
      state.filter = payload;
    },
    updateToDoList: (state, { payload }: PayloadAction<ToDo[]>) => {
      state.readyStatus = 'success';
      state.items = payload;
    },
  },
});

export default toDoList.reducer;
export const {
  getRequesting, getSuccess, getFailure, updateFilter, updateToDoList,
} = toDoList.actions;

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

const shouldUpdateFilter = (state: AppState, filter: string) => state.toDoList.filter !== filter;

export const UpdateFilterIfNeed = (filter:string): AppThunk => (dispatch, getState) => {
  if (shouldUpdateFilter(getState(), filter)) return dispatch(updateFilter(filter));

  return null;
};

const shouldUpdateToDoList = (state: AppState) => state.toDoList.readyStatus === 'success';

export const UpdateToDoListIfNeed = (data: ToDo[]): AppThunk => (dispatch, getState) => {
  if (shouldUpdateToDoList(getState())) return dispatch(updateToDoList(data));

  return null;
};
