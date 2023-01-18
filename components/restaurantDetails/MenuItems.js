import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useGlobalRestaurantAPI } from "../../contextAPI/RestaurantAPI";
import { Divider, Image } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import { AddToCart, RemoveFromCart } from "../../redux/CartReducer";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
// import { store } from "../../redux/Store";
import { styles } from "../../Styles";

export const MenuItems = ({ route }) => {
  const { name } = route.params; // importing restaurantName from restaurnt details page
  const [checkbox, setCheckbox] = useState(false);
  let cart = useSelector((state) => state.ZomatoCart.cartItem);

  const dispatch = useDispatch();

  const addItemToCart = (menu) => {
    dispatch(AddToCart(menu));
  };
  const removeItemFromCart = (menu) => {
    dispatch(RemoveFromCart(menu));
  };

  const { menuItems } = useGlobalRestaurantAPI();
  return (
    <View style={{ backgroundColor: "#eee" }}>
      {menuItems.map((menu) => {
        return (
          <View key={menu.id} style={styles.menuItemBg}>
            <View style={{ justifyContent: "center" }}>
              {!cart.some((i) => i.id === menu.id) ? (
                <View>
                  <TouchableOpacity
                    onPress={() => {
                      setCheckbox(true);
                      addItemToCart({ ...menu, restaurantName: name });
                    }}
                  >
                    <MaterialIcons //add to cart button
                      name="add-shopping-cart"
                      size={25}
                      style={styles.menuItemIcon}
                    />
                  </TouchableOpacity>
                </View>
              ) : (
                <View>
                  <TouchableOpacity
                    onPress={() => {
                      removeItemFromCart({ ...menu, restaurantName: name });
                    }}
                  >
                    <MaterialIcons //deleteButton
                      name="delete"
                      size={25}
                      style={{ marginBottom: 3, alignSelf: "center" }}
                    />
                  </TouchableOpacity>
                </View>
              )}
            </View>

            <View style={{ flex: 1 }}>
              <MenuTitle name={menu.name} />
              <MenuDescription description={menu.description} />
              <Text style={styles.menuItemDesc}>{`₹ ${menu.price}`}</Text>
            </View>
            <MenuImage image={menu.image} />
            <Divider width={5} />
          </View>
        );
      })}
    </View>
  );
};

const MenuImage = ({ image }) => {
  return (
    <>
      <Image
        style={styles.menuImage}
        source={{
          uri: image,
        }}
      />
    </>
  );
};
const MenuTitle = ({ name }) => {
  return (
    <>
      <Text style={styles.menuTitle}>{name}</Text>
    </>
  );
};
const MenuDescription = ({ description }) => {
  return (
    <>
      <Text style={styles.menuDescription}>{description}</Text>
    </>
  );
};

