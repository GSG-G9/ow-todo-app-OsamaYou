export default (): string => {
  const localTheme = window.localStorage.getItem('theme');
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches && !localTheme) {
    return 'dark-mode';
  } if (localTheme) {
    return localTheme;
  }
  return 'light-mode';
};
