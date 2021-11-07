import React from "react"
import { View, StyleSheet } from "react-native"
import { NavigationStackScreenComponent as StackNavigationScreen } from "react-navigation-stack"

import MealsList from "../components/MealsList"
import Loader from "../components/UI/Loader"
import store from "../store"

const FavoriteMealsScreen: StackNavigationScreen = ({ navigation }) => {
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    store.meals.fetch().then(() => setLoading(false))
  }, [])

  const favoriteMeals = React.useMemo(
    () => store.meals.data.filter(meal => meal.isFavorite),
    [store.meals.data]
  )

  if (loading) return <Loader />

  return (
    <View style={styles.screen}>
      <MealsList meals={favoriteMeals} navigation={navigation} />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
})

export default FavoriteMealsScreen
