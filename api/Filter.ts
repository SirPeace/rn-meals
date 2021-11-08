import axios from "axios"
import serverConfig from "../config/server"

export interface Filter {
  id: number
  title: string
}

const FilterAPI = {
  api: `${serverConfig.host}:${serverConfig.port}/filters`,

  async get(): Promise<Filter[]> {
    const response = await axios.get(this.api)

    return response.data.data
  },
}

export default FilterAPI
