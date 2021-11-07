import { makeAutoObservable, values } from "mobx"
import FilterAPI, { Filter } from "../api/Filter"

interface StoreFilter extends Filter {
  isActive?: boolean
}

class FilterStore {
  data: StoreFilter[] = []

  constructor() {
    makeAutoObservable(this)
  }

  setIsActive(filter: StoreFilter, value: boolean) {
    filter.isActive = value
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
