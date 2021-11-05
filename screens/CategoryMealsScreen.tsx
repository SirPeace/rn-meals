import React from "react"
import { View, StyleSheet, FlatList } from "react-native"
import { NavigationStackProp } from "react-navigation-stack"

import { Category } from "../api/Category"
import MealCard from "../components/MealCard"
import Text from "../components/UI/Text"
import store from "../store"

type ScreenProps = {
  navigation: NavigationStackProp
}

const CategoryMealsScreen: React.FC<ScreenProps> = ({ navigation }) => {
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

  if (loading) return <Text>Loading...</Text>

  return (
    <View style={styles.screen}>
      <FlatList
        data={categoryMeals}
        renderItem={listItem => (
          <MealCard
            meal={listItem.item}
            style={{ marginVertical: 10 }}
            onPress={() =>
              navigation.navigate({
                routeName: "Meal",
                params: { meal: listItem.item },
              })
            }
          />
        )}
        ListEmptyComponent={<Text>No meals in this category</Text>}
        style={{ width: "100%" }}
      />
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
