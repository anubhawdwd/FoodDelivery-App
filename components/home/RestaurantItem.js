import { Image, TouchableOpacity, View, Text } from "react-native";
import React from "react";
import { useGlobalRestaurantAPI } from "../../contextAPI/RestaurantAPI";
import { styles } from "../../Styles";
const RestaurantItem = ({ navigation }) => {
  const { restaurant } = useGlobalRestaurantAPI();
  return (
    <>
      {restaurant.map((item) => {
        return (
          <TouchableOpacity
            key={item.id}
            activeOpacity={1}
            style={{ marginBottom: 10 }}
            onPress={
              () =>
                navigation.navigate("RestaurantDetails", {
                  params: {
                    name: item.name,
                    image: item.image,
                    ratings: item.rating,
                  },
                })
              // this is passing via route to RestaurantDetails screen component
            }
          >
            <View key={item.id} style={styles.restaurantItems}>
              <RestaurantImage image={item.image} />
              <RestaurantInfo name={item.name} rating={item.rating} />
            </View>
          </TouchableOpacity>
        );
      })}
    </>
  );
};

const RestaurantImage = ({ image }) => {
  return (
    <>
      <Image
        style={styles.restaurantImage}
        source={{
          uri: image,
        }}
      />
    </>
  );
};

const RestaurantInfo = ({ name, rating }) => {
  return (
    <View style={styles.restaurantInfo}>
      <View>
        <Text style={styles.restaurantInfotext}>{name}</Text>
        <Text style={styles.restaurantInfoMins}>20-30 mins</Text>
      </View>
      <View style={styles.restaurantInfoRating}>
        <Text style={styles.restaurantInfoRatingtext}>{rating}</Text>
      </View>
    </View>
  );
};
export default RestaurantItem;
