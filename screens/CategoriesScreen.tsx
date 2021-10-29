import React from "react"
import { View, Text, StyleSheet, Button } from "react-native"
import { NavigationStackProp } from "react-navigation-stack"

type CategoriesScreenProps = {
  navigation: NavigationStackProp
}

const CategoriesScreen: React.FC<CategoriesScreenProps> = props => {
  return (
    <View style={styles.screen}>
      <Text>Categories Screen</Text>
      <Button
        title="Category meals"
        onPress={() => props.navigation.navigate("CategoryMeals")}
      />
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

export default CategoriesScreen
