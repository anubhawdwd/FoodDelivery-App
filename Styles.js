import { StyleSheet } from "react-native-web";

const styles = StyleSheet.create({
  //OrderCompleted
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.7)",
  },
  modalCheckoutContainerVC: {
    backgroundColor: "white",
    padding: 16,
    height: 500,
    borderWidth: 1,
  },
  modalCheckoutContainer: {
    backgroundColor: "yellow",
    padding: 16,
    height: "auto",
    width: "90%",
    borderWidth: 1,
  },

  restaurantName: {
    textAlign: "center",
    fontWeight: "600",
    fontSize: 18,
    marginBottom: 10,
  },
  subtotalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },

  subtotalText: {
    textAlign: "left",
    fontSize: 16,
    marginBottom: 10,
    color: "green",
  },

  tickMark: {
    height: 100,
    alignSelf: "center",
    marginBottom: 30,
  },
  cooking: {
    height: 300,
    alignSelf: "center",
    marginBottom: 30,
  },
  // viewCart
  viewCartBg: {
    marginTop: 20,
    backgroundColor: "black",
    alignItems: "center",
    padding: 13,
    borderRadius: 30,
    width: 300,
    position: "relative",
  },
  viewCartCheckout: {
    color: "white",
    fontSize: 20,
  },
  viewCartTotal: {
    position: "absolute",
    right: 20,
    color: "white",
    fontSize: 15,
    top: 17,
  },
  VCT: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
    bottom: "3%",
  },
  VCT1: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
  },
  VCT2: {
    marginTop: 20,
    backgroundColor: "rgba(0,0,0,0.75)",
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 15,
    borderRadius: 30,
    width: 300,
  },
  VCT3: {
    color: "white",
    fontSize: 18,
  },

  // screen Home.js
  home: {
    backgroundColor: "#eee",
    padding: 2,
    height: "100%",
    flexDirection: "column",
  },
  homeHeader: {
    backgroundColor: "white",
    padding: 15,
  },
  // Components home BottomTabs
  bottomTabs: {
    flexDirection: "row",
    margin: 10,
    justifyContent: "space-between",
  },
  iconsBottomTabs: {
    marginBottom: 3,
    alignSelf: "center",
  },
  // Components home Categories.js
  categ: {
    backgroundColor: "white",
    paddingLeft: 16,
    marginTop: 5,
  },
  categView: {
    alignItems: "center",
    marginRight: 16,
    marginTop: 5,
  },
  categImg: {
    width: 50,
    height: 40,
    resizeMode: "contain",
  },
  categText: {
    fontSize: 13,
    fontWeight: "900",
  },
  // SearchBar
  searchBarBg: {
    marginTop: 15,
    flexDirection: "row",
  },
  searchBarRightBtn: {
    backgroundColor: "white",
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    borderRadius: 20,
    marginRight: 8,
  },

  // RestaurantItems
  restaurantItems: {
    marginTop: 10,
    padding: 15,
    backgroundColor: "white",
  },
  restaurantImage: {
    width: "100%",
    height: 180,
  },

  restaurantInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    backgroundColor: "white",
  },
  restaurantInfotext: {
    fontSize: 18,
    fontWeight: "700",
  },
  restaurantInfoMins: {
    color: "grey",
    fontWeight: "600",
  },
  restaurantInfoRating: {
    backgroundColor: "#eee",
    borderRadius: 30,
    padding: 5,
  },
  restaurantInfoRatingtext: {
    fontFamily: "",
    fontWeight: "900",
  },

  // Components restaurantDetails About.js
  restaurantTitle: {
    marginTop: 10,
    marginHorizontal: 15,
  },
  resDesc: {
    marginLeft: 10,
    marginRight: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  // Components restaurantDetails MenuItems
  menuItemBg: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginHorizontal: 4,
    marginTop: 2,
    marginBottom: 0,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  menuItemIcon: {
    marginBottom: 3,
    alignSelf: "center",
  },
  menuItemDesc: {
    color: "black",
    fontWeight: "700",
    fontSize: 17.5,
  },
  menuImage: {
    width: 80,
    height: 70,
    borderRadius: 10,
  },
  menuTitle: {
    fontSize: 20,
    fontWeight: "600",
  },
  menuDescription: {
    fontSize: 16,
    fontweight: "600",
  },
  // Components restaurantDetails OrderItems.js
  orderItems: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#999",
    color:"red",
  },
  orderPrice: {
    opacity: 0.7,
    fontSize: 16,
  },
});

export { styles };
