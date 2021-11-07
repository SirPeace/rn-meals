import React from "react"
import { View, StyleSheet } from "react-native"
import { NavigationStackScreenComponent as StackNavigationScreen } from "react-navigation-stack"

import { Category } from "../api/Category"
import MealsList from "../components/MealsList"
import Loader from "../components/UI/Loader"
import store from "../store"

const CategoryMealsScreen: StackNavigationScreen = ({ navigation }) => {
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    store.meals.fetch().then(() => setLoading(false))
  }, [])

  const selectedCategory = navigation.getParam("category") as Category

  const categoryMeals = React.useMemo(
    () =>
      store.meals.data.filter(meal =>
        meal.categories.find(cat => cat.id === selectedCategory.id)
      ),
    [store.meals.data]
  )

  if (loading) return <Loader />

  return (
    <View style={styles.screen}>
      <MealsList meals={categoryMeals} navigation={navigation} />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
  },
})

export default CategoryMealsScreen
