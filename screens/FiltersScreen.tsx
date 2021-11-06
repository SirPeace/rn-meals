import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { NavigationStackScreenComponent as StackNavigationScreen } from "react-navigation-stack"

const FiltersScreen: StackNavigationScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Text>Filters Screen</Text>
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

export default FiltersScreen
