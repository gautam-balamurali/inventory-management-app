import { getLocalStorage } from "../../utils/local-storage-functions/LocalStorageFunctions";

export const reducerInitialState = {
  inventoryData: getLocalStorage("inventory") ?? [],
  filterInput: getLocalStorage("filter-by") ?? "all",
  sortInput: getLocalStorage("sort-by") ?? "name",
  checkboxInput: getLocalStorage("checkbox") ?? "",
};
