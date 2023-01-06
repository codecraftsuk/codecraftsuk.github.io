import { createGlobalContext } from 'create-global-context';

const initialState = {
  isDarkTheme: false,
};

const { Provider, useStore } = createGlobalContext(initialState);

export { Provider, useStore };
