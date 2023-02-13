import { combineReducers } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit/dist/configureStore";
import authReducer from './reducers/changeRow';


const rootReducer = combineReducers(
  {
    authReducer
  }
)

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type App = ReturnType<typeof rootReducer>