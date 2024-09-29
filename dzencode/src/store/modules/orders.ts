import { ordersMock } from '@/mocks/orders.mock'
import { Order, OrdersState } from '@/types/types'

const state = {
  orders: ordersMock,
  selectedOrder: null,
  deleteConfirmation: null
}

const mutations = {
  selectOrder(state: OrdersState, orderId: number) {
    state.selectedOrder = state.orders.find((order) => order.id === orderId) || null
  },
  confirmDelete(state: OrdersState, order: Order) {
    state.deleteConfirmation = order
  },
  deleteOrder(state: OrdersState, orderId: number) {
    state.orders = state.orders.filter((order) => order.id !== orderId)
    state.selectedOrder = null
    state.deleteConfirmation = null
  },

  deleteProductFromOrder(state: OrdersState, payload: { orderId: number; productId: number }) {
    const order = state.orders.find((order) => order.id === payload.orderId)

    if (order) {
      order.products = order.products.filter((product) => product.id !== payload.productId)
    }
  },

  closeDetails(state: OrdersState) {
    state.selectedOrder = null
  },
  cancelDelete(state: OrdersState) {
    state.deleteConfirmation = null
  }
}

const getters = {
  orders(state: OrdersState) {
    return state.orders
  },
  selectedOrder(state: OrdersState) {
    return state.selectedOrder
  },
  deleteConfirmation(state: OrdersState) {
    return state.deleteConfirmation
  },
  getOrderTitleById: (state: OrdersState) => (orderId: number) => {
    const order = state.orders.find((order) => order.id === orderId)
    return order ? order.title : ''
  }
}

export default {
  state,
  mutations,
  getters
}
