import { configureStore, EnhancedStore, StoreEnhancer } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AuthSlice, AuthState } from "../reducer/userData";
export const store: EnhancedStore<
  {
    userData: AuthState;
  },
  any,
  StoreEnhancer[]
> = configureStore({
  reducer: {
    userData: AuthSlice.reducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
