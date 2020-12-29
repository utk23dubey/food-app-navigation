import React from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import Colors from "../constants/Colors";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import MealList from "../components/MealList";

const CategoryMealScreen = (props) => {
  const categoryId = props.navigation.getParam("categoryId");
  const meals = MEALS.filter(
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
