import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import LottieView from "lottie-react-native";
import { db } from "../firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import OrderItem from "../components/restaurantDetails/OderItem";

import { styles } from "../Styles";

const OrderCompleted = () => {
  const [lastOrder, setLastOrder] = useState([]);
  useEffect(() => {
    onSnapshot(
      query(collection(db, "Orders"), orderBy("createdAt", "desc")),
      (snapshot) => {
        const cart = [];
        snapshot.docs.forEach((doc) => {
          cart.push({ ...doc.data().items }); // just needed the items not created at
        });

        setLastOrder(Object.values(cart[0]));
      }
    );
  }, []);

  const total = lastOrder
    .map((item) => Number(item.price))
    .reduce((prev, curr) => prev + curr, 0);

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "white", alignItems: "center" }}
    >
      <LottieView
        style={styles.tickMark}
        source={require("../assets/animations/check-mark.json")}
        autoPlay
        speed={0.5}
        loop={false}
      />
      <Text style={{ fontSize: 30 }}>
        Your Order for ₹{total} is placed Successfully
      </Text>

      <View style={styles.modalCheckoutContainer}>
        {lastOrder.map((item, index) => (
          <OrderItem key={index} items={item} />
        ))}
        <View style={styles.subtotalContainer}>
          <Text style={styles.subtotalText}>SubTotal</Text>
          <Text style={{ color: "green" }}>₹{total}</Text>
        </View>
      </View>

      <LottieView
        style={styles.cooking}
        source={require("../assets/animations/cooking.json")}
        autoPlay
        speed={0.8}
        loop={true}
      />
    </SafeAreaView>
  );
};
export default OrderCompleted;
