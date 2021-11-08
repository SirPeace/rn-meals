import { makeAutoObservable } from "mobx"

import MealAPI, { Meal } from "../api/Meal"

class MealStore {
  data: Meal[] = []

  constructor() {
    makeAutoObservable(this)
  }

  find(id: number) {
    return this.data.find(meal => meal.id === id)
  }

  setMeals(meals: Meal[]) {
    this.data = meals
  }

  updateMeal(meal: Meal) {
    this.data = this.data.map(stateMeal =>
      stateMeal.id === meal.id ? meal : stateMeal
    )
  }

  async fetch() {
    try {
      this.setMeals(await MealAPI.get())
    } catch (error: any) {
      console.error(error.response)
    }
  }

  async toggleFavorite(meal: Meal) {
    try {
      await MealAPI.toggleFavorite(meal)

      this.updateMeal({
        ...meal,
        isFavorite: !meal.isFavorite,
      })
    } catch (error: any) {
      console.error(error.response)
    }
  }
}

export default MealStore
