import axios from "axios"
import serverConfig from "../config/server"

export interface Category {
  id: number
  title: string
  color: string
}

const CategoryAPI = {
  api: `${serverConfig.host}:${serverConfig.port}/categories`,

  async get(): Promise<Category[]> {
    const response = await axios.get(this.api)

    return response.data.data
  },
}

export default CategoryAPI
