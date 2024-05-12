import { StyleSheet, Text, View, Pressable } from "react-native";
import { Link } from "expo-router";

export default function ExerciseListItem({ item }) {
  return (
    <Link href={`/${item.name}`} asChild>
      <Pressable style={styles.exerciseContainer}>
        <Text style={styles.exerciseName}>{item.name}</Text>
        <Text style={styles.exerciseSubtitle}>
          <Text style={styles.subValue}>{item.muscle}</Text> |{" "}
          <Text style={styles.subValue}>{item.equipment}</Text>
        </Text>
      </Pressable>
    </Link>
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

    //shadows
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
  },
  subValue: {
    //Capitalize first letter
    textTransform: "capitalize",
  },
});
