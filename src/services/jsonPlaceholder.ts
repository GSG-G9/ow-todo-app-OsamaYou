import { gql, request } from 'graphql-request';

import config from '../config';

export interface ToDo {
  id: string;
  content: string;
  state: boolean;
}

interface ToDoList {
  data?: ToDo[];
  error?: Error;
}

interface ToDoAction {
  data?: ToDo;
  error?: Error;
}

export const getToDoList = async (): Promise<ToDoList> => {
  try {
    const query = gql`
      {
        toDoLists{
          id
          content
          state
        }
      }
    `;
    const { toDoLists: data } = await request(config.API_URL, query);

    return { data };
  } catch (error) {
    return { error };
  }
};

export const addToDo = async (content: string, state: boolean): Promise<ToDoAction> => {
  try {
    const query = gql`
      mutation addToDo {
        createToDoList(data: {content: "${content}", state: ${state}}) {
          id
          content
          state
        }
      }
    `;
    const { createToDoList: data } = await request(config.API_URL, query);

    return { data };
  } catch (error) {
    return { error };
  }
};

export const deleteToDo = async (id: string): Promise<ToDoAction> => {
  try {
    const query = gql`
      mutation deleteToDo {
        deleteToDoList(where: {id: "${id}"}) {
          id
          content
          state
        }
      }
    `;
    const { deleteToDoList: data } = await request(config.API_URL, query);

    return { data };
  } catch (error) {
    return { error };
  }
};

export const updateToDoState = async (id: string, state: boolean): Promise<ToDoAction> => {
  try {
    const query = gql`
      mutation updateToDoState {
        updateToDoList(data: {state: ${state}}, where: {id: "${id}"}) {
          content
          id
          state
        }
      }
    `;
    const { updateToDoList: data } = await request(config.API_URL, query);

    return { data };
  } catch (error) {
    return { error };
  }
};

export default {
  getToDoList,
  addToDo,
  deleteToDo,
  updateToDoState,
};
