import { createSlice } from '@reduxjs/toolkit';
import getInitialTheme from '../utils/getInitialTheme';

interface theme {
  themeMode: string;
}

export const initialState: theme = {
  themeMode: getInitialTheme(),
};

const theme = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state: theme) => {
      if (state.themeMode === 'light-mode') {
        state.themeMode = 'dark-mode';
      } else {
        state.themeMode = 'light-mode';
      }
      window.localStorage.setItem('theme', state.themeMode);
    },

  },
});

export default theme.reducer;
export const {
  toggleTheme,
} = theme.actions;
