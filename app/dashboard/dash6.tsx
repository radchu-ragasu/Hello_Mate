import React, { useState, useEffect } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Importing icons
import Layout from "./dashDesign";

const Promotions: React.FC = () => {
  const [promotions, setPromotions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Simulating backend fetch
  useEffect(() => {
    setTimeout(() => {
      // Replace with actual API response
      const fetchedPromotions: any[] = []; // Example: []

      setPromotions(fetchedPromotions);
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <Layout headerText="Promotions">
      {loading ? (
        <ActivityIndicator size="large" color="#007bff" />
      ) : promotions.length === 0 ? (
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          <Ionicons name="megaphone-outline" size={120} color="#999" />
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              color: "#999",
              marginTop: 10,
            }}
          >
            No Promotions Available
          </Text>
          <Text style={{ fontSize: 14, color: "#999", marginTop: 5 }}>
            Check back later for new promotions!
          </Text>
        </View>
      ) : (
        promotions.map((promo, index) => (
          <View
            key={index}
            style={{ padding: 10, borderBottomWidth: 1, borderColor: "#ddd" }}
          >
            <Text
              style={{ fontSize: 16, fontWeight: "bold", color: "#007bff" }}
            >
              {promo.title}
            </Text>
            <Text style={{ color: "#666" }}>{promo.details}</Text>
          </View>
        ))
      )}
    </Layout>
  );
};

export default Promotions;
