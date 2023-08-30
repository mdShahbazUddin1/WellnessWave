import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Animated,
} from "react-native";

const GoalSettingScreen = ({ navigation }) => {
  const [goalType, setGoalType] = useState("");
  const [goalTarget, setGoalTarget] = useState("");
  const [error, setError] = useState("");
  const fadeInAnim = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(fadeInAnim, {
      toValue: 1,
      duration: 1000, // Adjust the duration as needed
      useNativeDriver: true,
    }).start();
  }, []);

  const handleSaveGoal = () => {
    if (goalType.trim() === "" || goalTarget.trim() === "") {
      setError("Please fill in all fields");
      return;
    }

    // Handle saving the goal data
    // ...

    navigation.goBack(); // Navigate back after saving
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.formContainer, { opacity: fadeInAnim }]}>
        <Text style={styles.title}>Set Your Fitness Goal</Text>
        <TextInput
          style={styles.input}
          placeholder="Goal Type (e.g. Weight Loss)"
          value={goalType}
          onChangeText={setGoalType}
        />
        <TextInput
          style={styles.input}
          placeholder="Goal Target (e.g. 10 kg)"
          value={goalTarget}
          onChangeText={setGoalTarget}
        />
        <Text style={styles.errorText}>{error}</Text>
        <Button title="Save Goal" onPress={handleSaveGoal} />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  formContainer: {
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 10,
    elevation: 3,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  errorText: {
    color: "red",
    marginBottom: 10,
  },
});

export default GoalSettingScreen;
