import CategoryStore from "./CategoryStore"
import FilterStore from "./FilterStore"
import MealStore from "./MealStore"

class RootStore {
  categories: CategoryStore
  filters: FilterStore
  meals: MealStore

  constructor() {
    this.categories = new CategoryStore()
    this.filters = new FilterStore()
    this.meals = new MealStore()
  }
}

export default new RootStore()
