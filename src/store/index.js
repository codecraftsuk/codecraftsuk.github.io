import { createGlobalContext } from 'create-global-context';

const initialState = {
  isDarkTheme: false,
};

const { Provider, useStore, useSet } = createGlobalContext(initialState);

export { Provider, useStore, useSet };
