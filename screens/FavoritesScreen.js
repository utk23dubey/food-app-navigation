import React from "react";
import { useSelector } from "react-redux";

import { View, StyleSheet } from "react-native";
import MealList from "../components/MealList";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeader from "../components/CustomHeader";
import DefaultText from "../components/DefaultText";
const FavoritesScreen = (props) => {
  const favoriteMeals = useSelector((state) => state.meals.favorites);

  if (favoriteMeals.length === 0 || !favoriteMeals) {
    return (
      <View style={styles.content}>
        <DefaultText>No favorite meals found. Start adding some!</DefaultText>
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      <MealList listData={favoriteMeals} navigation={props.navigation} />
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
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FavoritesScreen;
