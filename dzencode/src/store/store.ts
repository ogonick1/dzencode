import type { InjectionKey } from 'vue'
import { Store, createStore } from 'vuex'
import { State } from '../types/types'
import auth from './modules/auth'
import orders from './modules/orders'
import { productsMock } from '@/mocks/products.mock'

const state: State = {
  products: productsMock
}

const getters = {
  products(state: State) {
    return state.products
  }
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state,
  getters,
  modules: {
    auth,
    orders
  }
})
