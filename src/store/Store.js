import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/index";
import promise from "redux-promise-middleware";
import logger from "redux-logger";

export default function configureStore() {
  const store = createStore(
    rootReducer,
    {},
    applyMiddleware(promise(), logger)
  );

  if (module.hot) {
    module.hot.accept("../reducers", () => {
      const nextReducer = nextReducer;
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
