import React from "react"
import { StyleSheet } from "react-native"
import Text from "./Text"

const Loader: React.FC = () => {
  return <Text style={styles.loader}>Loading...</Text>
}

const styles = StyleSheet.create({
  loader: { textAlign: "center", margin: 20 },
})

export default Loader
