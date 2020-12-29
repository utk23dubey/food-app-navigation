import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridItem from "../components/CategoryGridTitle";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeader from "../components/CustomHeader";

const CategoriesScreen = (props) => {
  const renderItemData = (itemData) => {
    return (
      <CategoryGridItem
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() => {
          props.navigation.navigate({
            routeName: "CategoryMeals",
            params: { categoryId: itemData.item.id },
          });
        }}
      />
    );
  };
  return (
    <View>
      <FlatList numColumns={2} data={CATEGORIES} renderItem={renderItemData} />
    </View>
  );
};

CategoriesScreen.navigationOptions = (navigateData) => {
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
  gridItem: {
    flex: 1,
    margin: 20,
    height: 200,
  },
});

export default CategoriesScreen;
