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

  if (!isAppReady) {
    return <Splash />;
  }

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Profile"
        component={UserProfileScreen}
        options={() => ({
          tabBarIcon: ({ color, size }) =>
            renderTabIcon("Profile", "person", color, size),
        })}
      />
      <Tab.Screen
        name="Goals"
        component={GoalSettingScreen}
        options={() => ({
          tabBarIcon: ({ color, size }) =>
            renderTabIcon("Goals", "fitness-center", color, size),
        })}
      />
      <Tab.Screen
        name="Workout"
        component={WorkoutLogScreen}
        options={() => ({
          tabBarIcon: ({ color, size }) =>
            renderTabIcon("Workout", "directions-run", color, size),
        })}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
