import { createContext, useContext, useEffect, useReducer } from "react";

import { reducerFunction } from "../reducers/ReducerFunction";
import { reducerInitialState } from "../reducers/ReducerInitialState";
import {
  getLocalStorage,
  setLocalStorage,
} from "../../utils/local-storage-functions/LocalStorageFunctions";
import { inventoryData } from "../database/InventoryData";

export const InventoryContext = createContext();

export const InventoryProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducerFunction, reducerInitialState);

  useEffect(() => {
    const storedInventoryData = getLocalStorage("inventory");
    if (storedInventoryData?.length > 0) {
      dispatch({ type: "FETCH_INVENTORY", payload: storedInventoryData });
    } else dispatch({ type: "FETCH_INVENTORY", payload: inventoryData });
  }, []);

  useEffect(() => {
    setLocalStorage("inventory", state.inventoryData);
  }, [state.inventoryData]);

  return (
    <InventoryContext.Provider value={{ ...state, dispatch }}>
      {children}
    </InventoryContext.Provider>
  );
};

export const useInventory = () => useContext(InventoryContext);
