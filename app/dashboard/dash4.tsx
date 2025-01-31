import React, { useState, useEffect } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Importing icons
import Layout from "./dashDesign";

const PendingOrders: React.FC = () => {
  const [pendingOrders, setPendingOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Simulating backend fetch
  useEffect(() => {
    setTimeout(() => {
      // Replace with actual API response
      const fetchedPendingOrders: any[] = []; // Example: []

      setPendingOrders(fetchedPendingOrders);
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <Layout headerText="Orders">
      {loading ? (
        <ActivityIndicator size="large" color="#007bff" />
      ) : pendingOrders.length === 0 ? (
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          <Ionicons name="hourglass-outline" size={120} color="#999" />
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              color: "#999",
              marginTop: 10,
            }}
          >
            No Pending Orders
          </Text>
          <Text style={{ fontSize: 14, color: "#999", marginTop: 5 }}>
            Your pending orders will appear here.
          </Text>
        </View>
      ) : (
        pendingOrders.map((order, index) => (
          <View
            key={index}
            style={{ padding: 10, borderBottomWidth: 1, borderColor: "#ddd" }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              {order.title}
            </Text>
            <Text style={{ color: "#666" }}>{order.details}</Text>
          </View>
        ))
      )}
    </Layout>
  );
};

export default PendingOrders;
