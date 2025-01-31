import React, { useState } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const Flex: React.FC = () => {
  return (
    <View style={styles.container}>
      {boxes.map((box, index) => {
        const isClickable = index !== 0 && index !== boxes.length - 1; // First & last flex not clickable

        return (
          <HoverableFlex
            key={index}
            box={box}
            isClickable={isClickable}
            index={index}
          />
        );
      })}
    </View>
  );
};

// Hoverable Flex Component
const HoverableFlex: React.FC<{
  box: any;
  isClickable: boolean;
  index: number;
}> = ({ box, isClickable, index }) => {
  const [hover, setHover] = useState(false);

  const handlePress = () => {
    console.log(`Flex box ${index + 1} clicked`);
  };

  return (
    <View
      style={[
        styles.box,
        {
          flex: box.flex,
          backgroundColor: hover ? "#AFCFE6" : box.color, // Change color on hover
          marginVertical: isClickable ? 5 : 0, // Remove space for first & last
        },
      ]}
    >
      {isClickable ? (
        <Pressable
          style={styles.content}
          onPress={handlePress}
          onPressIn={() => setHover(true)} // Simulate hover effect on press
          onPressOut={() => setHover(false)} // Revert color on release
        >
          {/* Left section (Icon + Text) */}
          <View style={styles.leftSection}>
            <Icon name={box.icon} size={24} color="black" style={styles.icon} />
            <Text style={styles.text}>{box.text}</Text>
          </View>

          {/* Arrow positioned at the far right */}
          <View style={styles.arrowContainer}>
            <Icon name="chevron-forward-outline" size={24} color="black" />
          </View>
        </Pressable>
      ) : (
        <View style={styles.content}>
          {/* Non-clickable Icon & Text */}
          <View style={styles.leftSection}>
            <Icon name={box.icon} size={24} color="black" style={styles.icon} />
            <Text style={styles.text}>{box.text}</Text>
          </View>
        </View>
      )}
    </View>
  );
};

// Flexbox data with icons
const boxes = [
  { flex: 1.7, color: "#78B3CE", text: "Hello Mate !", icon: "home" },
  { flex: 0.5, color: "#C9E6F0", text: "My Profile", icon: "person" },
  { flex: 0.5, color: "#C9E6F0", text: "Contact Us", icon: "call" },
  { flex: 0.5, color: "#C9E6F0", text: "Become a worker", icon: "briefcase" },
  { flex: 0.5, color: "#C9E6F0", text: "Register a company", icon: "business" },
  { flex: 0.5, color: "#C9E6F0", text: "Share", icon: "share-social" },
  { flex: 0.5, color: "#C9E6F0", text: "Rate", icon: "star" },
  { flex: 0.5, color: "#C9E6F0", text: "Logout", icon: "log-out" },
  { flex: 2.0, color: "#FFF" },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  box: {
    justifyContent: "center",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 15,
    justifyContent: "space-between",
  },
  leftSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: 10, // Text is now closer to the icon
    color: "#000",
  },
  text: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
  },
  arrowContainer: {
    position: "absolute",
    right: 15,
  },
});

export default Flex;
