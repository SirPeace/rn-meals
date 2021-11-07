import axios from "axios"
import serverConfig from "../config/server"

export interface Filter {
  id: number
  title: string
}

const FilterAPI = {
  api: `${serverConfig.host}:${serverConfig.port}`,

  async get(): Promise<Filter[]> {
    const response = await axios.get(`${this.api}/filters`)

    const filters = response.data.data

    return filters
  },
}

export default FilterAPI
