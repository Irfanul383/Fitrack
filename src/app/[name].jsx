import { StyleSheet, Text, View, ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";
import exercises from "../../assets/data/exercises.json";
import { Stack } from "expo-router";

export default function ExerciseDetailsScreen() {
  const params = useLocalSearchParams();
  const exercise = exercises.find((item) => item.name == params.name);

  if (!exercise) {
    return <Text>Exercise not found</Text>;
  }
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Stack.Screen options={{ title: exercise.name }} />

      <View style={styles.panel}>
        <Text style={styles.exerciseName}>{exercise.name}</Text>
        <Text style={styles.exerciseSubtitle}>
          <Text style={styles.subValue}>{exercise.muscle}</Text> |{" "}
          <Text style={styles.subValue}>{exercise.equipment}</Text>
        </Text>
      </View>
      <View style={styles.panel}>
        <Text style={styles.instructions}>{exercise.instructions}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  exerciseName: {
    fontSize: 20,
    fontWeight: "500",
  },
  exerciseSubtitle: {
    color: "dimgray",
  },
  panel: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
  },
  instructions: {
    fontSize: 16,
    lineHeight: 20,
  },
  subValue: {
    //Capitalize first letter
    textTransform: "capitalize",
  },
  container: {
    padding: 10,
    gap: 10,
  },
});
