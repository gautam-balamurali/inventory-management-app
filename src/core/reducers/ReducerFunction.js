export const reducerFunction = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "FETCH_INVENTORY":
      return { ...state, inventoryData: [...payload] };
    case "UPDATE_FILTER_BY":
      return { ...state, filterInput: payload };
    case "UPDATE_SORT_BY":
      return { ...state, sortInput: payload };
    case "UPDATE_CHECKBOX":
      return { ...state, checkboxInput: payload };
    case "UPDATE_INVENTORY":
      return { ...state, inventoryData: [...state.inventoryData, payload] };
    default:
      return state;
  }
};
