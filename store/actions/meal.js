export const TOGGLE_FAV = "TOGGLE_FAV";
export const SET_FILTERS = "SET_FILTERS";

export const toggleFavorite = (id) => {
  return {
    type: TOGGLE_FAV,
    mealId: id,
  };
};

export const setFilters = (filterSettings) => {
  return { type: SET_FILTERS, filters: filterSettings };
};
