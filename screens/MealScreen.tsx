import React from "react"
import { View, StyleSheet } from "react-native"
import { NavigationStackProp } from "react-navigation-stack"

import { Meal } from "../api/Meal"
import Text from "../components/UI/Text"

type ScreenProps = {
  navigation: NavigationStackProp
}

const MealScreen: React.FC<ScreenProps> = ({ navigation }) => {
  const meal = navigation.getParam("meal") as Meal

  return (
    <View style={styles.screen}>
      <Text bold>{meal.title}</Text>
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
