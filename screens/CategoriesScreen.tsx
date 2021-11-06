import React from "react"
import { View, StyleSheet, FlatList } from "react-native"
import { observer } from "mobx-react-lite"

import { Category } from "../api/Category"
import CategoryCard from "../components/CategoryCard"
import Text from "../components/UI/Text"
import store from "../store"
import { NavigationBottomTabScreenComponent as TabNavigationScreen } from "react-navigation-tabs"

const CategoriesScreen: TabNavigationScreen = ({ navigation }) => {
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    store.categories.fetch().then(() => setLoading(false))
  }, [])

  if (loading) return <Text style={{ textAlign: "center" }}>Loading...</Text>

  const navigateToCategoryMealsScreen = (category: Category) => {
    navigation.navigate({
      routeName: "CategoryMeals",
      params: { category },
    })
  }

  return (
    <View style={styles.screen}>
      <FlatList
        data={store.categories.data.slice()}
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

export default observer(CategoriesScreen)
