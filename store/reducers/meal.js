import { MEALS } from "../../data/dummy-data";
import { TOGGLE_FAV, SET_FILTERS } from "../actions/meal";
const initialState = {
  meals: MEALS,
  favorites: [],
  filteredMeals: MEALS,
};

// const mealReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case TOGGLE_FAV:
//       const mealId = state.favorites.findIndex(
//         (item) => item.id === action.mealId
//       );
//       console.log(mealId);
//       if (mealId >= 0) {
//         const updatedMeal = [...state.favorites];
//         updatedMeal.splice(mealId, 1);
//         return { ...state, favorites: updatedMeal };
//       } else {
//         const meal = state.meals.find((meal) => meal.id === mealId);
//         return { ...state, favorites: favorites.concat(meal) };
//       }
//     default:
//       return state;
//   }
// };
const mealReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAV:
      const existingIndex = state.favorites.findIndex(
        (meal) => meal.id === action.mealId
      );
      if (existingIndex >= 0) {
        const updatedFavMeals = [...state.favorites];
        updatedFavMeals.splice(existingIndex, 1);
        return { ...state, favorites: updatedFavMeals };
      } else {
        const meal = state.meals.find((meal) => meal.id === action.mealId);
        return { ...state, favorites: state.favorites.concat(meal) };
      }
    case SET_FILTERS:
      const appliedFilters = action.filters;
      const updatedFilteredMeals = state.meals.filter((meal) => {
        if (appliedFilters.glutenFree && !meal.isGlutenFree) {
          return false;
        }
        if (appliedFilters.lactoseFree && !meal.isLactoseFree) {
          return false;
        }
        if (appliedFilters.vegetarian && !meal.isVegetarian) {
          return false;
        }
        if (appliedFilters.vegan && !meal.isVegan) {
          return false;
        }
        return true;
      });
      return { ...state, filteredMeals: updatedFilteredMeals };
    default:
      return state;
  }
};

export default mealReducer;
