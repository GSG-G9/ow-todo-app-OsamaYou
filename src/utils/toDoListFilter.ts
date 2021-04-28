import { ToDo } from '../services/jsonPlaceholder';

export default (items:ToDo[], filter: string): ToDo[] => {
  if (filter === 'all') return items;
  return items.filter(({ state }) => (filter === 'active' ? !state : state));
};
