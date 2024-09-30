import { configureStore } from "@reduxjs/toolkit";
import { baseAPI } from "./api/baseApi";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import authSlice from "./features/auth/authSlice";
import userMenuDrawerSlice from "./features/ui/userMenuDrawer/userMenuDrawerSlice";
import deviceTypeSlice from "./features/ui/deviceType/deviceTypeSlice";
import carSlice from "./features/car/carSlice";
import carFiltersSlice from "./features/carFilters/carFiltersSlice";

const persistConfig = {
  key: "auth",
  storage,
};

const persistedAuthReducer = persistReducer(persistConfig, authSlice);

export const store = configureStore({
  reducer: {
    [baseAPI.reducerPath]: baseAPI.reducer,
    auth: persistedAuthReducer,
    cars: carSlice,
    carFilters: carFiltersSlice,
    userMenuDrawer: userMenuDrawerSlice,
    deviceType: deviceTypeSlice,
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(baseAPI.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
