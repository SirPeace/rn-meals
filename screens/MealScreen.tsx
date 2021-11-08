import React from "react"
import { Image, ScrollView, StyleSheet, View } from "react-native"
import { NavigationStackScreenComponent as StackNavigationScreen } from "react-navigation-stack"
import { observer } from "mobx-react-lite"

import { Meal } from "../api/Meal"
import Text from "../components/UI/Text"
import colors from "../constants/colors"
import store from "../store"

const MealScreen: StackNavigationScreen = ({ navigation }) => {
  const meal = React.useMemo(
    () => store.meals.find(navigation.getParam("mealId")),
    [store.meals.data]
  ) as Meal

  React.useEffect(() => {
    navigation.setParams({
      toggleFavorite: () => store.meals.toggleFavorite(meal),
    })
  }, [meal])

  return (
    <ScrollView>
      <Image source={{ uri: meal.imageUrl }} style={styles.image} />
      <View style={styles.content}>
        <View style={styles.details}>
          <Text size="lg" bold style={styles.detail}>
            {meal.duration}m
          </Text>
          <Text size="lg" bold style={styles.detail}>
            {meal.affordability.toUpperCase()}
          </Text>
          <Text size="lg" bold style={styles.detail}>
            {meal.complexity.toUpperCase()}
          </Text>
        </View>

        <View>
          <Text bold size="xl" style={styles.heading}>
            Ingredients
          </Text>
          {meal.ingredients.map(ingredient => (
            <Text key={ingredient} style={styles.listItem}>
              • {ingredient}
            </Text>
          ))}
        </View>

        <View>
          <Text bold size="xl" style={styles.heading}>
            Steps
          </Text>
          {meal.steps.map((step, index) => (
            <Text key={step} style={styles.listItem}>
              {index + 1}) {step}
            </Text>
          ))}
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 250,
  },

  content: {
    padding: 20,
  },

  details: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginBottom: 20,
  },

  detail: {
    color: colors.primary,
  },

  heading: {
    textAlign: "center",
    marginVertical: 15,
  },

  listItem: {
    paddingVertical: 5,
  },
})

export default observer(MealScreen)
