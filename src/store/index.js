import { createGlobalContext } from "create-global-context";

const initialState = {};

const { Provider, useStore } = createGlobalContext(initialState);

export { Provider, useStore };
