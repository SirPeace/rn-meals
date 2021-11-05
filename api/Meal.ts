import axios from "axios"
import serverConfig from "../config/server"
import { Category } from "./Category"
import { Filter } from "./Filter"

export type Meal = {
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
}

const MealAPI = {
  api: `${serverConfig.host}:${serverConfig.port}`,

  async get(): Promise<Meal[]> {
    const response = await axios.get(`${this.api}/meals`)

    const meals = response.data.data

    return meals
  },
}

export default MealAPI
