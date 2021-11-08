import axios from "axios"
import serverConfig from "../config/server"
import { Category } from "./Category"
import { Filter } from "./Filter"

export interface Meal {
  id: number
  categories: Category[]
  filters: Filter[]
  title: string
  affordability: "affordable" | "pricey" | "luxurious"
  complexity: "simple" | "challenging" | "hard"
  imageUrl: string
  duration: number
  ingredients: string[]
  steps: string[]
  isFavorite: boolean
}

const MealAPI = {
  api: `${serverConfig.host}:${serverConfig.port}/meals`,

  async get(): Promise<Meal[]> {
    const response = await axios.get(this.api)

    return response.data.data
  },

  async toggleFavorite(meal: Meal): Promise<void> {
    await axios.post(`${this.api}/${meal.id}/favorite`)
  },
}

export default MealAPI
