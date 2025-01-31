import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  Image,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

// Importing local images
const imageAssets = {
  image1: require("../../assets/images/image1.jpg"),
  image2: require("../../assets/images/image2.jpg"),
  image3: require("../../assets/images/image3.jpg"),
  image4: require("../../assets/images/image4.jpg"),
  image5: require("../../assets/images/image5.png"),
  image6: require("../../assets/images/image6.jpg"),
  image7: require("../../assets/images/image7.jpg"),
  image8: require("../../assets/images/image8.jpg"),
  image9: require("../../assets/images/image9.png"),
};

// Data for the 3x3 grid
const data = [
  { id: "1", title: "Cleaner", image: imageAssets.image1 },
  { id: "2", title: "Electrician", image: imageAssets.image2 },
  { id: "3", title: "Technician", image: imageAssets.image3 },
  { id: "4", title: "Home Nurse", image: imageAssets.image4 },
  { id: "5", title: "Plumber", image: imageAssets.image5 },
  { id: "6", title: "Tutor", image: imageAssets.image6 },
  { id: "7", title: "Painter", image: imageAssets.image7 },
  { id: "8", title: "Carpenter", image: imageAssets.image8 },
  { id: "9", title: "Babysitter", image: imageAssets.image9 },
];

const Flex = () => {
  const handlePress = (title: string) => {
    console.log(`${title} clicked!`);
  };

  return (
    <View style={[styles.container, { flexDirection: "column" }]}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => handlePress("menu")}
          style={styles.menuIcon}
        >
          <FontAwesome name="bars" size={26} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search here"
          placeholderTextColor="#888"
        />
      </View>

      <View style={styles.servicesContainer}>
        <Text style={styles.servicesText}>Services</Text>
      </View>

      {/* 3x3 Grid of Clickable Flex Items */}
      <View style={styles.gridContainer}>
        <FlatList
          data={data}
          numColumns={3} // 3 items per row
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.gridItem}
              onPress={() => handlePress(item.title)}
            >
              <Image source={item.image} style={styles.image} />
              <Text style={styles.itemText}>{item.title}</Text>
            </TouchableOpacity>
          )}
        />
      </View>

      {/* Footer Section */}
      <View style={styles.footer}>
        <TouchableOpacity
          onPress={() => handlePress("home")}
          style={styles.iconContainer}
        >
          <FontAwesome name="home" size={30} color="#fafafa" />
          <Text style={styles.iconText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => handlePress("clipboard")}
          style={styles.iconContainer}
        >
          <FontAwesome name="clipboard" size={25} color="#fafafa" />
          <Text style={styles.iconText}>Orders</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => handlePress("gift")}
          style={styles.iconContainer}
        >
          <FontAwesome name="gift" size={30} color="#fafafa" />
          <Text style={styles.iconText}>Gift</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => handlePress("bell")}
          style={styles.iconContainer}
        >
          <FontAwesome name="bell" size={25} color="#fafafa" />
          <Text style={styles.iconText}>Bell</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
  },
  header: {
    flex: 1.7,
    backgroundColor: "#1E90FF",
    alignItems: "flex-end",
    justifyContent: "center",
    paddingRight: 20,
  },
  menuIcon: {
    padding: 10,
  },
  searchContainer: {
    position: "absolute",
    top: "20%",
    left: "5%",
    width: "90%",
    zIndex: 10,
  },
  searchInput: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    fontSize: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  gridContainer: {
    flex: 4,
    paddingHorizontal: 10,
    paddingVertical: 10,
    justifyContent: "space-between",
  },
  gridItem: {
    width: "28%",
    aspectRatio: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f8f8f8",
    borderRadius: 10,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    margin: 10,
  },
  image: {
    width: "86%",
    height: "80%",
    borderRadius: 8,
    resizeMode: "cover",
  },
  itemText: {
    fontSize: 14,
    color: "#333",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 5,
  },
  footer: {
    flex: 0.6,
    backgroundColor: "#1E90FF",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  iconContainer: {
    alignItems: "center",
  },
  iconText: {
    color: "#fafafa",
    fontSize: 12,
    marginBottom: 5,
  },
  servicesContainer: {
    marginTop: 60,
    alignItems: "center",
  },
  servicesText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#333",
  },
});

export default Flex;
