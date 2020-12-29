import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MealList from "../components/MealList";
import { MEALS } from "../data/dummy-data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeader from "../components/CustomHeader";
const FavoritesScreen = (props) => {
  const meals = MEALS.filter((m) => m.id == "m1" || m.id == "m2");
  return (
    <View style={styles.screen}>
      <MealList listData={meals} navigation={props.navigation} />
    </View>
  );
};

FavoritesScreen.navigationOptions = (navigateData) => {
  return {
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeader}>
        <Item
          title="FAV"
          color="white"
          iconName="ios-menu"
          onPress={() => navigateData.navigation.toggleDrawer()}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FavoritesScreen;
