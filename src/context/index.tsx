import { createContext } from "react";
import { initialState } from "../store/reducer";

export const AppContext = createContext(initialState());
