import React from "react"
import { StyleSheet, Text, View } from "react-native"
import * as Font from "expo-font"
import AppLoading from "expo-app-loading"

import Navigator from "./navigation/Navigator"

export default function App() {
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    loadFonts().then(() => setLoading(false))
  }, [])

  if (loading) return <AppLoading />

  return <Navigator />
}

const styles = StyleSheet.create({})

const loadFonts = () =>
  Font.loadAsync({
    "Open Sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "Open Sans Bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  })
