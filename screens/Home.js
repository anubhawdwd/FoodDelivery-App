import React from "react";
import { View, ScrollView } from "react-native";
import BottomTabs from "../components/home/BottomTabs";
import Categories from "../components/home/Categories";
import RestaurantItem from "../components/home/RestaurantItem";
import SearchBar from "../components/home/SearchBar";
import { styles } from "../Styles";

const Home = ({ navigation }) => {
  return (
    <View
      style={styles.home}
    >
      <View style={styles.homeHeader}>
        <SearchBar />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ backgroundColor: "#eee" }}
      >
        <Categories />
        <RestaurantItem navigation={navigation} />
      </ScrollView>

      <BottomTabs navigation={navigation} />
    </View>
  );
};

export default Home;
