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

  const selectedCategory = React.useMemo(
    () => store.categories.find(navigation.getParam("categoryId")),
    [store.categories.data]
  ) as Category

  const meals = React.useMemo(() => {
    const categoryMeals = store.meals.data.filter(meal =>
      meal.categories.find(category => category.id === selectedCategory?.id)
    )

    const appliedFilters = store.filters.data.filter(filter => filter.isActive)

    return categoryMeals.filter(category =>
      appliedFilters.every(filter =>
        category.filters.find(categoryFilter => categoryFilter.id === filter.id)
      )
    )
  }, [store.meals.data])

  if (loading) return <Loader />

  return (
    <View style={styles.screen}>
      <MealsList meals={meals} navigation={navigation} />
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
