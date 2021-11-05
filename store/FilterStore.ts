import { makeAutoObservable } from "mobx"
import FilterAPI, { Filter } from "../api/Filter"

class FilterStore {
  data: Filter[] = []

  constructor() {
    makeAutoObservable(this)
  }

  setFilters(filters: Filter[]) {
    this.data = filters
  }

  async fetch() {
    try {
      this.setFilters(await FilterAPI.get())
    } catch (error: any) {
      console.error(error.response)
    }
  }
}

export default FilterStore
