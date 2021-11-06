import React from "react"
import { View, StyleSheet } from "react-native"
import { NavigationStackScreenComponent as StackNavigationScreen } from "react-navigation-stack"

import { Meal } from "../api/Meal"
import Text from "../components/UI/Text"

const MealScreen: StackNavigationScreen = props => {
  const meal = props.navigation.getParam("meal") as Meal

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
