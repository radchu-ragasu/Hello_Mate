import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

interface LayoutProps {
  children: React.ReactNode; // Body content of the page
  headerText?: string; // Optional header text (if you want a text header)
  headerComponent?: React.ReactNode; // Optional custom header component
}

const Layout: React.FC<LayoutProps> = ({
  children,
  headerText,
  headerComponent,
}) => {
  const handlePress = (title: string) => {
    console.log(`${title} clicked!`);
  };

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        {/* Render either the custom header component or headerText */}
        {headerComponent ? (
          headerComponent // Custom header component
        ) : (
          <Text style={styles.headerText}>{headerText || "Notification"}</Text> // Default header text
        )}
      </View>

      {/* Body Section */}
      <View style={styles.body}>{children}</View>

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
    flexDirection: "column",
  },
  header: {
    flex: 0.6,
    backgroundColor: "#78B3CE",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 10,
  },
  headerText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
  },
  body: {
    flex: 2.5,
    justifyContent: "center",
    alignItems: "center",
  },
  servicesText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#333",
  },
  footer: {
    flex: 0.3,
    backgroundColor: "#78B3CE",
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
});

export default Layout;
