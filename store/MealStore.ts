import { makeAutoObservable } from "mobx"

import MealAPI, { Meal } from "../api/Meal"

class MealStore {
  data: Meal[] = []

  constructor() {
    makeAutoObservable(this)
  }

  setMeals(meals: Meal[]) {
    this.data = meals
  }

  async fetch() {
    try {
      this.setMeals(await MealAPI.get())
    } catch (error: any) {
      console.error(error.response)
    }
  }
}

export default MealStore
