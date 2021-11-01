import React from "react"
import { View, Text, StyleSheet, Button } from "react-native"
import { NavigationStackProp } from "react-navigation-stack"

import { Category } from "../api/Category"

type CategoryMealsScreenProps = {
  navigation: NavigationStackProp
}

const CategoryMealsScreen: React.FC<CategoryMealsScreenProps> = props => {
  const category = props.navigation.getParam("category") as Category

  return (
    <View style={styles.screen}>
      <Text>Category Meals Screen</Text>
      <Button title="Meal" onPress={() => props.navigation.navigate("Meal")} />
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

export default CategoryMealsScreen
