import React from "react"
import { View, StyleSheet, ViewStyle, TouchableOpacity } from "react-native"

import { Category } from "../api/Category"
import Text from "./UI/Text"

type CategoryCardProps = {
  category: Category
  onPress: () => void
  style?: ViewStyle
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, ...props }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.65}
      onPress={props.onPress}
      style={{
        ...styles.categoryCard,
        ...props.style,
        backgroundColor: category.color,
      }}
    >
      <View style={styles.cardContent}>
        <Text bold numberOfLines={2} size="xl">
          {category.title}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  categoryCard: {
    flex: 1,
    padding: 10,
    borderRadius: 10,
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.27,
    shadowOffset: { height: 2, width: 0 },
    shadowRadius: 10,
  },

  cardContent: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
})

export default CategoryCard
