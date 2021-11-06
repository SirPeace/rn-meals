import React from "react"
import * as Font from "expo-font"
import AppLoading from "expo-app-loading"
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar"
import { enableScreens } from "react-native-screens"

import Navigator from "./navigation/Navigator"

export default function App() {
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    loadFonts().then(() => setLoading(false))
  }, [])

  if (loading) return <AppLoading />

  return (
    <>
      <Navigator />
      <ExpoStatusBar style="inverted" />
    </>
  )
}

enableScreens()

const loadFonts = () =>
  Font.loadAsync({
    "Open Sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "Open Sans Bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  })
