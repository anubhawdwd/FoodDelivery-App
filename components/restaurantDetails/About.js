import { View, Text } from "react-native";
import React from "react";
import { Image } from "react-native-elements";
import { styles } from "../../Styles";

const description = "Lorem ipsum dolor sit amet consectetur.";

export const About = ({ route }) => {
  const { name, image, ratings } = route.params;
  return (
    <View>
      <View>
        <RestaurantImage image={image} />
        <RestaurantTitle name={name} />
        <RestaurantDescription description={description} rating={ratings} />
      </View>
    </View>
  );
};

const RestaurantImage = ({ image }) => {
  return (
    <>
      <Image source={{ uri: image }} style={styles.restaurantImage} />
    </>
  );
};
const RestaurantTitle = ({ name }) => {
  return (
    <View style={styles.restaurantTitle}>
      <Text style={{ fontSize: 30 }}>{name}</Text>
    </View>
  );
};
const RestaurantDescription = ({ description, rating }) => {
  return (
    <View
      style={styles.resDesc}
    >
      <Text style={{ fontSize: 18 }}>{description}</Text>
      <Text style={{ fontSize: 18 }}>{`${rating} ⭐`}</Text>
    </View>
  );
};
