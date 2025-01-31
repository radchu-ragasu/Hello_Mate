import { View, Text, StyleSheet } from "react-native";
import { Image } from "expo-image";

export default function wel1() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../assets/images/Hellomate.jpg")}
        contentFit="contain"
        transition={1000}
      />
      <Text style={styles.text}>Loading.....</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  image: {
    marginTop: 10,
    width: 525,
    height: 600,
    borderRadius: 10,
  },

  text: {
    fontSize: 25,
    color: "#ADD9E9",
    fontWeight: "bold",
  },
});
