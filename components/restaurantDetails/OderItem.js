import { View, Text } from "react-native";
import React from "react";
import { styles } from "../../Styles";

export default function OderItem({ items }) {
  const { name, price } = items;
  return (
    <View style={{flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#999",
    }}>
      <Text style={styles.menuDescription}>{name}</Text>
      <Text style={styles.OrderPrice}>₹{price}</Text>
    </View>
    // <View style={styles.OrderItems}>
    //   <Text style={styles.menuDescription}>{name}</Text>
    //   <Text style={styles.OrderPrice}>₹{price}</Text>
    // </View>
  );
}