import React from "react";
import { useSelector } from "react-redux";
import { View, StyleSheet } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import MealList from "../components/MealList";

const CategoryMealScreen = (props) => {
  const availableMeals = useSelector((state) => state.meals.filteredMeals);
  const categoryId = props.navigation.getParam("categoryId");
  const meals = availableMeals.filter(
    (item) => item.categoryIds.indexOf(categoryId) > -1
  );

  return (
    <View style={styles.screen}>
      <MealList listData={meals} navigation={props.navigation} />
    </View>
  );
};

CategoryMealScreen.navigationOptions = (navigationData) => {
  const categoryId = navigationData.navigation.getParam("categoryId");
  const CategoryName = CATEGORIES.find((c) => c.id == categoryId);
  return {
    headerTitle: CategoryName.title,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryMealScreen;
