import { createStackNavigator } from "react-navigation-stack"
import { createAppContainer } from "react-navigation"

import CategoriesScreen from "../screens/CategoriesScreen"
import CategoryMealsScreen from "../screens/CategoryMealsScreen"
import MealScreen from "../screens/MealScreen"

const Navigator = createStackNavigator({
  Categories: CategoriesScreen,
  CategoryMeals: CategoryMealsScreen,
  Meal: MealScreen,
})

export default createAppContainer(Navigator)
