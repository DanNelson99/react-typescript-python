import { useContext } from "react";
import { GlobalStateContext } from "./globalState";

export const useGlobalState = () => useContext(GlobalStateContext);