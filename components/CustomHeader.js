import React from "react";
import { HeaderButton } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";

const CustomHeader = (props) => {
  return (
    <HeaderButton
      IconComponent={Ionicons}
      iconSize={20}
      color={Colors.primaryColor}
      {...props}
    />
  );
};

export default CustomHeader;
export { Item } from "react-navigation-header-buttons";
