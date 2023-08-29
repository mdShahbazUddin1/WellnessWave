import React, { useState, useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import UserProfileScreen from "../screens/UserProfileScreen";
import GoalSettingScreen from "../screens/GoalSettingScreen";
import WorkoutLogScreen from "../screens/WorkoutLogScreen";
import Splash from "../screens/Splash";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const [isAppReady, setAppReady] = useState(false);
  const [activeTab, setActiveTab] = useState("Profile");

  useEffect(() => {
    setTimeout(() => {
      setAppReady(true);
    }, 3000);
  }, []);

  if (!isAppReady) {
    return <Splash />;
  }

  const navigation = useNavigation(); // Get the navigation object

  const handleTabPress = (tabName) => {
    setActiveTab(tabName);
  };

  const renderTabIcon = (tabName, iconName, color, size) => (
    <TouchableOpacity
      style={{
        alignItems: "center",
        justifyContent: "center",
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: activeTab === tabName ? "#EF5350" : "#ffffff",
        marginTop: -25,

      }}
      onPress={() => {
        handleTabPress(tabName);
        navigation.navigate(tabName); // Correct navigation name here
      }}
    >
      <MaterialIcons
        name={iconName}
        size={size}
        color={activeTab === tabName ? "#ffffff" : color}
      />
    </TouchableOpacity>
  );

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Profile" // Use "Profile" as the name
        component={UserProfileScreen}
        options={() => ({
          tabBarIcon: ({ color, size }) =>
            renderTabIcon("Profile", "person", color, size),
          tabBarLabelStyle: {
            fontSize: 14,
            padding: 5,
            marginTop: 2,
            fontWeight: "600",
            color: "#EF5350",
          },
        })}
      />
      <Tab.Screen
        name="Goals" // Use "Goals" as the name
        component={GoalSettingScreen}
        options={() => ({
          tabBarIcon: ({ color, size }) =>
            renderTabIcon("Goals", "fitness-center", color, size),
          tabBarLabelStyle: {
            fontSize: 14,
            padding: 5,
            marginTop: 2,
            fontWeight: "600",
            color: "#EF5350",
          },
        })}
      />
      <Tab.Screen
        name="Workout" // Use "Workout" as the name
        component={WorkoutLogScreen}
        options={() => ({
          tabBarIcon: ({ color, size }) =>
            renderTabIcon("Workout", "directions-run", color, size),
          tabBarLabelStyle: {
            fontSize: 14,
            padding: 5,
            marginTop: 2,
            fontWeight: "600",
            color: "#EF5350",
          },
        })}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
