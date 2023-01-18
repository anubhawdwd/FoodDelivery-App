import { View, Text, TouchableOpacity, Modal, StyleSheet } from "react-native";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import OrderItem from "./OderItem";
import { db, setDoc } from "../../firebase";
import { addDoc, collection, doc, serverTimestamp } from "firebase/firestore";
import { ClearCart } from "../../redux/CartReducer";
import { styles } from "../../Styles";

export default function ViewCart({ navigation }) {
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const { cartItem, restaurantName } = useSelector((state) => state.ZomatoCart);
  const total = cartItem
    .map((item) => Number(item.price))
    .reduce((prev, curr) => prev + curr, 0);

  const addOrderToFirebase = async () => {
    await addDoc(collection(db, "Orders"), {
      items: cartItem,
      // restaurantName: cartItem.restaurantName,
      createdAt: serverTimestamp(),
    });
    setModalVisible(false);
    navigation.navigate("OrderCompleted");
  };

  const ClearAll = () => {
    console.log("anu");
    dispatch(ClearCart());
  };

  const checkoutModalContent = () => {
    return (
      <>
        <View style={styles.modalContainer}>
          <View style={styles.modalCheckoutContainerVC}>
            <Text style={styles.restaurantName}>{restaurantName}</Text>
            {cartItem.map((item, index) => (
              <OrderItem key={index} items={item} />
            ))}
            <View style={styles.subtotalContainer}>
              <Text style={styles.subtotalText}>SubTotal</Text>
              <Text>₹{total}</Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <TouchableOpacity
                style={styles.viewCartBg}
                onPress={() => {
                  addOrderToFirebase();
                  setTimeout(() => {
                    ClearAll();
                  }, 2000);
                }}
              >
                <Text style={styles.viewCartCheckout}>Checkout</Text>
                <Text style={styles.viewCartTotal}>₹{total}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </>
    );
  };
  // console.warn("total", Boolean(total));
  return (
    <>
      <Modal //imported from react-native
        animationType="slide"
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        {checkoutModalContent()}
      </Modal>

      <View style={styles.VCT}>
        {total ? (
          <View style={styles.VCT1}>
            <TouchableOpacity
              style={styles.VCT2}
              onPress={() => setModalVisible(true)}
            >
              <Text style={styles.VCT3}> ₹{total}</Text>
              <Text style={styles.VCT3}>View Cart</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <></>
        )}
      </View>
    </>
  );
}
