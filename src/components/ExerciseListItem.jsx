import { StyleSheet, Text, View, FlatList } from "react-native";

export default function ExerciseListItem({ item }) {
  return (
    <View style={styles.exerciseContainer}>
      <Text style={styles.exerciseName}>{item.name}</Text>
      <Text style={styles.exerciseSubtitle}>
        <Text style={styles.subValue}>{item.muscle}</Text> |{" "}
        <Text style={styles.subValue}>{item.equipment}</Text>
      </Text>
    </View>
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
  exerciseContainer: {
    backgroundColor: "#fff",
    gap: 5,
    borderRadius: 10,
    padding: 10,
  },
  subValue: {
    //Capitalizes first letter
    textTransform: "capitalize",
  },
});
