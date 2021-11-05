import { makeAutoObservable } from "mobx"
import CategoryAPI, { Category } from "../api/Category"

class CategoryStore {
  data: Category[] = []

  constructor() {
    makeAutoObservable(this)
  }

  setCategories(categories: Category[]) {
    this.data = categories
  }

  async fetch() {
    try {
      this.setCategories(await CategoryAPI.get())
    } catch (error: any) {
      console.error(error.response)
    }
  }
}

export default CategoryStore
