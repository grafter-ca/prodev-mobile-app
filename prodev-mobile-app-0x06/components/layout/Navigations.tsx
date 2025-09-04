import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Tabs } from "expo-router";
import React from "react";

export default function BottomNavigation() {
  return (
      <Tabs
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            const icons: Record<string, keyof typeof Ionicons.glyphMap> = {
              index: "home",
              search: "search",
              saved: "heart",
              inbox: "chatbubble",
              profile: "person",
            };

            // get base icon

            let iconName = icons[route.name.toLowerCase()];

            //apend `-outline` if not focused

            if (!focused){
                iconName +="-outline"
            }

            return <Ionicons name= {iconName as keyof typeof Ionicons.glyphMap} size={size} color={color} />
          },

          tabBarActiveTintColor: "#007AFF",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="search" options={{ title: "Search" }} />
      <Tabs.Screen name="saved" options={{ title: "Saved" }} />
      <Tabs.Screen name="inbox" options={{ title: "Inbox" }} />
      <Tabs.Screen name="profile" options={{ title: "Profile" }} />
      </Tabs>
  );
}
