import React from "react"
import { Text, FlatList } from "react-native"
import { NavigationStackProp } from "react-navigation-stack"
import { Meal } from "../api/Meal"
import MealCard from "./MealCard"

type PropsType = {
  meals: Meal[]
  navigation: NavigationStackProp
  [k: string]: any
}

const MealsList: React.FC<PropsType> = ({ meals, navigation, ...props }) => {
  return (
    <FlatList
      data={meals}
      renderItem={listItem => (
        <MealCard
          meal={listItem.item}
          style={{ marginVertical: 10 }}
          onPress={() =>
            navigation.navigate({
              routeName: "Meal",
              params: { mealId: listItem.item.id },
            })
          }
        />
      )}
      ListEmptyComponent={<Text>No meals were found</Text>}
      style={{ width: "100%" }}
    />
  )
}

export default MealsList
