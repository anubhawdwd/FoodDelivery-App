import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { styles } from "../../Styles";

const BottomTabs = ({ navigation }) => {
  const bottomTabsArray = [
    {
      id: 1,
      icon: "home",
      text: "Home",
      nav: "Home",
    },
    {
      id: 2,
      icon: "search",
      text: "Browse",
      nav: "Home",
    },
    {
      id: 3,
      icon: "shopping-bag",
      text: "Grocery",
      nav: "Home",
    },
    {
      id: 4,
      icon: "receipt",
      text: "Orders",
      nav: "OrderCompleted",
    },
    {
      id: 5,
      icon: "user",
      text: "Account",
      nav: "Home",
    },
  ];

  return (
    <View style={styles.bottomTabs}>
      {bottomTabsArray.map((elem) => {
        const { id, icon, text, nav } = elem;
        return (
          <View key={id}>
            <TouchableOpacity onPress={() => navigation.navigate(nav)}>
              <FontAwesome5
                name={icon}
                size={25}
                style={styles.iconsBottomTabs}
              />
              <Text> {text} </Text>
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
};
export default BottomTabs;