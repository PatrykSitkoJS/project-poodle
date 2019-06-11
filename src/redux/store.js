import { createStore } from "redux";
import { rootReducer } from "./reducers";

const initialState = {
  token: undefined,
  url: undefined,
  data: undefined
};
const store = createStore(
  rootReducer,
  initialState,
  // @ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
