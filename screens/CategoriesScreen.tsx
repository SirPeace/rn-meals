import React from "react"
import { View, StyleSheet, FlatList } from "react-native"
import { NavigationStackProp } from "react-navigation-stack"

import CategoryAPI, { Category } from "../api/Category"
import CategoryCard from "../components/CategoryCard"

type CategoriesScreenProps = {
  navigation: NavigationStackProp
}

const CategoriesScreen = ({ navigation }: CategoriesScreenProps) => {
  const [categories, setCategories] = React.useState<Category[]>([])
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    CategoryAPI.get()
      .then(categories => {
        setCategories(categories)
        setLoading(false)
      })
      .catch(err => console.error(err))
  }, [])

  if (loading) return null

  const navigateToCategoryMealsScreen = (category: Category) => {
    navigation.navigate({
      routeName: "CategoryMeals",
      params: { category },
    })
  }

  return (
    <View style={styles.screen}>
      <FlatList
        data={categories}
        renderItem={listItem => (
          <CategoryCard
            category={listItem.item}
            style={styles.category}
            onPress={() => navigateToCategoryMealsScreen(listItem.item)}
          />
        )}
        numColumns={2}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
  },

  category: {
    margin: 5,
    height: 150,
  },
})

export default CategoriesScreen
