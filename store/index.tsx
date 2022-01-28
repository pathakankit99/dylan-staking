import rootReducer from "./reducers";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
// import { composeWithDevTools } from "redux-devtools-extension";
const persistConfig = {
  key: "admin",
  timeout: 0,
  storage,
  //   whitelist: ["download_list"]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const composeEnhancers = compose;
let store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk))
);
let persistor = persistStore(store);
const final = () => {
  
}
export default final;
export { store, persistor };
