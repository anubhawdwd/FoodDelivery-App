import { ScrollView } from "react-native";
import React from "react";
import { About } from "../components/restaurantDetails/About";
import {MenuItems} from "../components/restaurantDetails/MenuItems";
import ViewCart from "../components/restaurantDetails/ViewCart";

const RestaurantDetails = ({route:{params}, navigation}) => {
  
  return (
    <>
      <About route={params} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <MenuItems route={params}  />
      </ScrollView>
      <ViewCart navigation={navigation} />
    </>
  );
};

export default RestaurantDetails;
