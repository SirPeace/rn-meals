import React from "react"
import { View, Text, StyleSheet } from "react-native"

const MealScreen: React.FC = () => {
  return (
    <View style={styles.screen}>
      <Text>Meal Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
})

export default MealScreen
