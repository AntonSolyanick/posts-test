import { combineReducers, configureStore, createStore } from "@reduxjs/toolkit";

import postsReducer from "./reducers/PostsSlice";
import { postApi } from "../../shared/PostService";

const rootReducer = combineReducers({
  postsReducer,
  [postApi.reducerPath]: postApi.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleWare) =>
      getDefaultMiddleWare().concat(postApi.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
