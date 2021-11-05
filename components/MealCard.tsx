import React from "react"
import {
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  ViewStyle,
} from "react-native"

import { Meal } from "../api/Meal"
import Text from "./UI/Text"

type MealCardProps = {
  meal: Meal
  style?: ViewStyle
  onPress?: () => void
}

const MealCard: React.FC<MealCardProps> = ({ meal, ...props }) => {
  return (
    <TouchableOpacity onPress={props.onPress} activeOpacity={0.7}>
      <View style={{ ...styles.card, ...props.style }}>
        <ImageBackground
          source={{ uri: meal.imageUrl }}
          style={styles.thumbnail}
        >
          <View style={styles.title}>
            <Text style={styles.titleText}>{meal.title}</Text>
          </View>
        </ImageBackground>

        <View style={styles.details}>
          <Text bold>{meal.duration}m</Text>
          <Text>{meal.affordability.toUpperCase()}</Text>
          <Text>{meal.complexity.toUpperCase()}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    height: 200,
    backgroundColor: "#fff",
    borderRadius: 10,
    overflow: "hidden",
  },

  thumbnail: {
    flex: 1,
    justifyContent: "flex-end",
  },

  title: {
    backgroundColor: "rgba(0, 0, 0, 0.65)",
    padding: 10,
  },

  titleText: {
    fontSize: 20,
    color: "#fff",
  },

  details: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
})

export default MealCard
