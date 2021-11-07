import { observer } from "mobx-react-lite"
import React from "react"
import { ScrollView, StyleSheet, Switch, View } from "react-native"
import { NavigationStackScreenComponent as StackNavigationScreen } from "react-navigation-stack"
import Loader from "../components/UI/Loader"

import Text from "../components/UI/Text"
import colors from "../constants/colors"
import store from "../store"

const FiltersScreen: StackNavigationScreen = ({ navigation }) => {
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    store.filters.fetch().then(() => setLoading(false))
  }, [])

  if (loading) return <Loader />

  return (
    <ScrollView contentContainerStyle={styles.screen}>
      {store.filters.data.map(filter => (
        <View style={styles.filter} key={filter.id}>
          <Text size="lg">{filter.title}</Text>
          <Switch
            value={filter.isActive}
            onValueChange={value => {
              store.filters.setIsActive(filter, value)
            }}
            thumbColor={colors.primary}
            trackColor={{ false: "#ccc", true: colors.secondary }}
          />
        </View>
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
  },

  filter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
})

export default observer(FiltersScreen)
