import { createStackNavigator } from "react-navigation-stack"
import { createAppContainer } from "react-navigation"

import CategoriesScreen from "../screens/CategoriesScreen"
import CategoryMealsScreen from "../screens/CategoryMealsScreen"
import MealScreen from "../screens/MealScreen"
import colors from "../constants/colors"
import { Category } from "../api/Category"

const Navigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
      navigationOptions: {
        headerTitle: "Meals Categories",
      },
    },
    CategoryMeals: {
      screen: CategoryMealsScreen,
      navigationOptions: ({ navigation }) => {
        const category = navigation.getParam("category") as Category

        return {
          headerTitle: `Category: ${category.title}`,
        }
      },
    },
    Meal: {
      screen: MealScreen,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: "Meal",
        }
      },
    },
  },
  {
    initialRouteName: "Categories",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: colors.primary,
      },
      headerTintColor: "#fff",
    },
  }
)

export default createAppContainer(Navigator)
