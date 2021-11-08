import React from "react"
import { createAppContainer } from "react-navigation"
import {
  createStackNavigator,
  NavigationStackOptions,
} from "react-navigation-stack"
import { createBottomTabNavigator } from "react-navigation-tabs"
import { createDrawerNavigator, DrawerActions } from "react-navigation-drawer"
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
import FiltersScreen from "../screens/FiltersScreen"
import store from "../store"

const defaultNavigationOptions: NavigationStackOptions = {
  headerStyle: {
    backgroundColor: colors.primary,
  },
  headerTintColor: "#fff",
  headerTitleStyle: {
    fontFamily: "Open Sans Bold",
  },
  headerBackTitleStyle: {
    fontFamily: "Open Sans",
  },
}

const mainStackNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
      navigationOptions: navData => ({
        headerTitle: "Meals Categories",
        headerLeft: () => (
          <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
              title="Menu"
              iconName="menu"
              onPress={() =>
                navData.navigation.dispatch(DrawerActions.toggleDrawer())
              }
            />
          </HeaderButtons>
        ),
      }),
    },

    CategoryMeals: {
      screen: CategoryMealsScreen,
      navigationOptions: ({ navigation }) => {
        const category = store.categories.find(
          navigation.getParam("categoryId")
        ) as Category

        return {
          headerTitle: `Category: ${category.title}`,
        }
      },
    },

    Meal: {
      screen: MealScreen,
      navigationOptions: ({ navigation }) => {
        const meal = store.meals.find(navigation.getParam("mealId")) as Meal
        const toggleFavorite = navigation.getParam("toggleFavorite")

        return {
          headerTitle: meal.title,
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
              {meal.isFavorite ? (
                <Item
                  title="Favorite"
                  iconName="star"
                  onPress={() => toggleFavorite(meal)}
                />
              ) : (
                <Item
                  title="Favorite"
                  iconName="star-outline"
                  onPress={() => toggleFavorite(meal)}
                />
              )}
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

const favoritesStackNavigator = createStackNavigator(
  {
    Favorites: {
      screen: FavoriteMealsScreen,
      navigationOptions: navData => ({
        title: "Favorite Meals",
        headerLeft: () => (
          <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
              title="Menu"
              iconName="menu"
              onPress={() =>
                navData.navigation.dispatch(DrawerActions.toggleDrawer())
              }
            />
          </HeaderButtons>
        ),
      }),
    },

    Meal: {
      screen: MealScreen,
      navigationOptions: ({ navigation }) => {
        const meal = store.meals.find(navigation.getParam("mealId")) as Meal

        return { headerTitle: meal.title }
      },
    },
  },
  { defaultNavigationOptions }
)

const tabsNavigator = createBottomTabNavigator(
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
      screen: favoritesStackNavigator,
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
      labelStyle: {
        fontFamily: "Open Sans",
      },
    },
  }
)

const filtersStackNavigator = createStackNavigator(
  {
    Filters: {
      screen: FiltersScreen,

      navigationOptions: navData => ({
        title: "Meals Filters",
        headerLeft: () => (
          <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
              title="Menu"
              iconName="menu"
              onPress={() =>
                navData.navigation.dispatch(DrawerActions.toggleDrawer())
              }
            />
          </HeaderButtons>
        ),
      }),
    },
  },
  {
    defaultNavigationOptions,
  }
)

const mainDrawerNavigator = createDrawerNavigator(
  {
    Main: {
      screen: tabsNavigator,
      navigationOptions: {
        title: "Meals",
      },
    },
    Filters: {
      screen: filtersStackNavigator,
      navigationOptions: {
        title: "Meals filters",
      },
    },
  },
  {
    hideStatusBar: true,
    contentOptions: {
      activeTintColor: colors.primary,
      labelStyle: {
        fontWeight: "normal",
        fontFamily: "Open Sans Bold",
      },
    },
  }
)

export default createAppContainer(mainDrawerNavigator)
