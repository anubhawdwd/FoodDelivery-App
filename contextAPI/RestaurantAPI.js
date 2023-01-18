import { View, Text } from "react-native";
import React, { createContext, useContext, useState } from "react";
import { faker } from "@faker-js/faker";
const RestaurantContext = createContext("");
faker.seed(99);

export const RestaurantAPIProvider = ({ children }) => {
  const Restaurants = [...Array(10)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    rating: faker.datatype.number({ min: 1, max: 5, precision: 0.5 }),
    image: `${faker.image.food()}?random=${Math.round(Math.random() * 1000)}`,
    // if random is not there then same image renders again and again
  }));

  const MenuItems = [...Array(5)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    description: faker.commerce.productMaterial(),
    image: `${faker.image.food()}?random=${Math.round(Math.random() * 1000)}`,
    price: faker.commerce.price(100, 500),
  }));

  const [restaurant, setRestaurant] = useState(Restaurants);
  const [menuItems, setmenuItems] = useState(MenuItems);
  // console.log("e", restaurant);
  return (
    <RestaurantContext.Provider value={{ restaurant, menuItems }}>
      {children}
    </RestaurantContext.Provider>
  );
};

export const useGlobalRestaurantAPI = () => useContext(RestaurantContext);
