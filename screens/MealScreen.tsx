import React from "react"
import { View, StyleSheet } from "react-native"
import { HeaderButtons, Item } from "react-navigation-header-buttons"
import { NavigationStackScreenComponent } from "react-navigation-stack"

import { Meal } from "../api/Meal"
import HeaderButton from "../components/HeaderButton"
import Text from "../components/UI/Text"

const MealScreen: NavigationStackScreenComponent = props => {
  const meal = props.navigation.getParam("meal") as Meal

  return (
    <View style={styles.screen}>
      <Text bold>{meal.title}</Text>
    </View>
  )
}

MealScreen.navigationOptions = () => ({
  headerRight: () => (
    <HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item
        title="Favorite"
        iconName="star"
        onPress={() => console.log("favorite")}
      />
    </HeaderButtons>
  ),
})

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
})

export default MealScreen
