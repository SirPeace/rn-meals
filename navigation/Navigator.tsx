import React from "react"
import { createAppContainer } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack"
import { createBottomTabNavigator } from "react-navigation-tabs"
import { HeaderButtons, Item } from "react-navigation-header-buttons"
import { MaterialCommunityIcons } from "@expo/vector-icons"

import CategoriesScreen from "../screens/CategoriesScreen"
import CategoryMealsScreen from "../screens/CategoryMealsScreen"
import MealScreen from "../screens/MealScreen"
import FavoriteMealsScreen from "../screens/FavoriteMealsScreen"
import colors from "../constants/colors"
import { Category } from "../api/Category"
import { Meal } from "../api/Meal"
import HeaderButton from "../components/HeaderButton"

const defaultNavigationOptions = {
  headerStyle: {
    backgroundColor: colors.primary,
  },
  headerTintColor: "#fff",
}

const mainStackNavigator = createStackNavigator(
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
        const meal = navigation.getParam("meal") as Meal

        return {
          headerTitle: meal.title,
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
              <Item
                title="Favorite"
                iconName="star"
                onPress={() => console.log("favorite")}
              />
            </HeaderButtons>
          ),
        }
      },
    },
  },
  {
    initialRouteName: "Categories",
    defaultNavigationOptions,
  }
)

const favoriteMealsStackNavigator = createStackNavigator(
  {
    Favorites: {
      screen: FavoriteMealsScreen,
      navigationOptions: {
        title: "Favorite Meals",
      },
    },

    Meal: {
      screen: MealScreen,
      navigationOptions: ({ navigation }) => {
        const meal = navigation.getParam("meal") as Meal

        return { headerTitle: meal.title }
      },
    },
  },
  { defaultNavigationOptions }
)

const rootTabsNavigator = createBottomTabNavigator(
  {
    Main: {
      screen: mainStackNavigator,
      navigationOptions: {
        title: "Meals Catalog",
        tabBarIcon: tabOptions => (
          <MaterialCommunityIcons
            name="food-fork-drink"
            size={24}
            color={tabOptions.focused ? colors.primary : "gray"}
          />
        ),
      },
    },

    Favorites: {
      screen: favoriteMealsStackNavigator,
      navigationOptions: {
        tabBarIcon: tabOptions => (
          <MaterialCommunityIcons
            name="star"
            size={24}
            color={tabOptions.focused ? colors.primary : "gray"}
          />
        ),
      },
    },
  },
  {
    initialRouteName: "Main",
    tabBarOptions: {
      activeTintColor: colors.primary,
    },
  }
)

export default createAppContainer(rootTabsNavigator)
