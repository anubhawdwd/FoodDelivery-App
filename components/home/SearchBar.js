import { Text, View } from "react-native";
import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import { styles } from "../../Styles";

const SearchBar = () => {
 
  return (
    <View style={styles.searchBarBg}>
      <GooglePlacesAutocomplete
        placeholder="Search"
        styles={{
          textInput: {
            backgroundColor: "#eee",
            borderRadius: 30,
            marginTop: 2,
            fontWeight: "700",
          },
          textInputContainer: {
            backgroundColor: "#eee",
            borderRadius: 30,
            flexDirection: "row",
            alignItems: "center",
            marginRight: 20,
          },
        }}
        renderLeftButton={() => (
          <View style={{ paddingLeft: 10 }}>
            <Ionicons name="location-sharp" size={25} />
          </View>
        )}
        renderRightButton={() => (
          <View style={styles.searchBarRightBtn}>
            <AntDesign
              name="clockcircle"
              size={11}
              style={{ marginRight: 5 }}
            />
            <Text>Search</Text>
          </View>
        )}
      />
    </View>
  );
};

export default SearchBar;
