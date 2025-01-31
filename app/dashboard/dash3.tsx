import React, { useState, useEffect } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Importing icons
import Layout from "./dashDesign";

const Dashboard: React.FC = () => {
  const [notifications, setNotifications] = useState<any[]>([]); // Store notifications
  const [loading, setLoading] = useState(true); // Show loading state

  // Simulating backend fetch
  useEffect(() => {
    setTimeout(() => {
      // Example: Fetching from backend
      const fetchedNotifications: any[] = []; // Replace this with actual API response

      setNotifications(fetchedNotifications);
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <Layout headerText="Notification">
      {loading ? (
        <ActivityIndicator size="large" color="#007bff" />
      ) : notifications.length === 0 ? (
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginTop: 0,
          }}
        >
          <Ionicons name="notifications-off-outline" size={150} color="#999" />
          <Text
            style={{
              fontSize: 40,
              fontWeight: "bold",
              color: "#999",
              marginTop: 10,
            }}
          >
            No Notification Yet
          </Text>
          <Text
            style={{
              fontSize: 15,
              fontWeight: "bold",
              color: "#999",
              marginTop: 10,
            }}
          >
            You have no notifications right now. Come back later
          </Text>
        </View>
      ) : (
        notifications.map((notification, index) => (
          <View
            key={index}
            style={{ padding: 10, borderBottomWidth: 1, borderColor: "#ddd" }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              {notification.title}
            </Text>
            <Text style={{ color: "#666" }}>{notification.message}</Text>
          </View>
        ))
      )}
    </Layout>
  );
};

export default Dashboard;
