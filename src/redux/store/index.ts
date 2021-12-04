import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import reducers from "../reducers";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["common"],
  blacklist: ["router"], // navigation will not be persisted
};

const rootReducer = combineReducers({
  ...reducers,
});

export type AppState = ReturnType<typeof rootReducer>;
let initialState: AppState | undefined;
const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = [thunk];
const enhancers = [];
const windowIfDefined = typeof window === "undefined" ? null : (window as any);
if (windowIfDefined && windowIfDefined.__REDUX_DEVTOOLS_EXTENSION__) {
  enhancers.push(windowIfDefined.__REDUX_DEVTOOLS_EXTENSION__());
}

let store = createStore(
  persistedReducer,
  initialState,
  compose(applyMiddleware(...middleware), ...enhancers)
);
let persistor = persistStore(store);
// let currentState = store.getState();
store.subscribe(() => {
//   let previousState = currentState;
//   currentState = store.getState();

});


export default function configureStore() {
  return { store, persistor };
}