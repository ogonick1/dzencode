import type { InjectionKey } from 'vue'
// @ts-ignore
import { Store, createStore } from 'vuex'
import { Product, Order, State } from '../types/types'

const state: State = {
  orders: [
    {
      id: 1,
      title: 'Order 1',
      date: '2017-06-29 12:09:33',
      description: 'desc',
      products: [
        {
          id: 1,
          serialNumber: 1234,
          isNew: 1,
          photo: '/src/assets/img/photo1.jpg',
          title: 'Product 1',
          type: 'Monitors',
          specification: 'Specification 1',
          guarantee: {
            start: '2017-06-29 12:09:33',
            end: '2017-06-29 12:09:33'
          },
          price: [
            { value: 100, symbol: 'USD', isDefault: 0 },
            { value: 2600, symbol: 'UAH', isDefault: 1 }
          ],
          order: 1,
          date: '2017-06-29 12:09:33'
        },
        {
          id: 2,
          serialNumber: 1234,
          isNew: 1,
          photo: '',
          title: 'Product 2',
          type: 'Monitors',
          specification: 'Specification 1',
          guarantee: {
            start: '2017-06-29 12:09:33',
            end: '2017-06-29 12:09:33'
          },
          price: [
            { value: 100, symbol: 'USD', isDefault: 0 },
            { value: 2600, symbol: 'UAH', isDefault: 1 }
          ],
          order: 2,
          date: '2017-06-29 12:09:33'
        }
      ]
    },
    {
      id: 2,
      title: 'Order 2 lllllllllllllllllllllllllllllllllll',
      date: '2017-06-29 12:09:33',
      description: 'desc',
      products: [
        {
          id: 1,
          serialNumber: 1234,
          isNew: 1,
          photo: '../assets/img/photo1.jpg',
          title: 'Product 1',
          type: 'Monitors',
          specification: 'Specification 1',
          guarantee: {
            start: '2017-06-29 12:09:33',
            end: '2017-06-29 12:09:33'
          },
          price: [
            { value: 100, symbol: 'USD', isDefault: 0 },
            { value: 2600, symbol: 'UAH', isDefault: 1 }
          ],
          order: 1,
          date: '2017-06-29 12:09:33'
        },
        {
          id: 2,
          serialNumber: 1234,
          isNew: 1,
          photo: '/src/assets/img/photo1.jpg',
          title: 'Product 2',
          type: 'Monitors',
          specification: 'Specification 1',
          guarantee: {
            start: '2017-06-29 12:09:33',
            end: '2017-06-29 12:09:33'
          },
          price: [
            { value: 100, symbol: 'USD', isDefault: 0 },
            { value: 2600, symbol: 'UAH', isDefault: 1 }
          ],
          order: 2,
          date: '2017-06-29 12:09:33'
        }
      ]
    },
    {
      id: 3,
      title: 'Order 3',
      date: '2022-07-15 10:05:45',
      description: 'New order for electronics',
      products: [
        {
          id: 1,
          serialNumber: 5678,
          isNew: 1,
          photo: '/src/assets/img/photo3.jpg',
          title: 'Laptop X1',
          type: 'Laptops',
          specification: 'Intel Core i7, 16GB RAM, 512GB SSD',
          guarantee: {
            start: '2022-07-15 10:05:45',
            end: '2023-07-15 10:05:45'
          },
          price: [
            { value: 1200, symbol: 'USD', isDefault: 0 },
            { value: 32000, symbol: 'UAH', isDefault: 1 }
          ],
          order: 3,
          date: '2022-07-15 10:05:45'
        },
        {
          id: 2,
          serialNumber: 8765,
          isNew: 1,
          photo: '/src/assets/img/photo4.jpg',
          title: 'Laptop Y2',
          type: 'Laptops',
          specification: 'AMD Ryzen 7, 16GB RAM, 1TB SSD',
          guarantee: {
            start: '2022-07-15 10:05:45',
            end: '2023-07-15 10:05:45'
          },
          price: [
            { value: 1300, symbol: 'USD', isDefault: 0 },
            { value: 35000, symbol: 'UAH', isDefault: 1 }
          ],
          order: 3,
          date: '2022-07-15 10:05:45'
        }
      ]
    },
    {
      id: 4,
      title: 'Order 4',
      date: '2021-03-10 09:15:30',
      description: 'Office supplies order',
      products: [
        {
          id: 1,
          serialNumber: 9999,
          isNew: 0,
          photo: '/src/assets/img/photo5.jpg',
          title: 'Printer Z3',
          type: 'Printers',
          specification: 'Laser, Duplex, Wireless',
          guarantee: {
            start: '2021-03-10 09:15:30',
            end: '2022-03-10 09:15:30'
          },
          price: [
            { value: 300, symbol: 'USD', isDefault: 0 },
            { value: 7800, symbol: 'UAH', isDefault: 1 }
          ],
          order: 4,
          date: '2021-03-10 09:15:30'
        },
        {
          id: 2,
          serialNumber: 4321,
          isNew: 0,
          photo: '/src/assets/img/photo6.jpg',
          title: 'Monitor W1',
          type: 'Monitors',
          specification: '27 inch, 144Hz, 4K',
          guarantee: {
            start: '2021-03-10 09:15:30',
            end: '2022-03-10 09:15:30'
          },
          price: [
            { value: 500, symbol: 'USD', isDefault: 0 },
            { value: 13000, symbol: 'UAH', isDefault: 1 }
          ],
          order: 4,
          date: '2021-03-10 09:15:30'
        }
      ]
    },
    {
      id: 5,
      title: 'Order 5',
      date: '2023-08-25 11:30:00',
      description: 'Gaming accessories order',
      products: [
        {
          id: 1,
          serialNumber: 1111,
          isNew: 1,
          photo: '/src/assets/img/photo7.jpg',
          title: 'Gaming Keyboard G7',
          type: 'Accessories',
          specification: 'Mechanical, RGB, Wireless',
          guarantee: {
            start: '2023-08-25 11:30:00',
            end: '2024-08-25 11:30:00'
          },
          price: [
            { value: 200, symbol: 'USD', isDefault: 0 },
            { value: 5200, symbol: 'UAH', isDefault: 1 }
          ],
          order: 5,
          date: '2023-08-25 11:30:00'
        },
        {
          id: 2,
          serialNumber: 2222,
          isNew: 1,
          photo: '/src/assets/img/photo8.jpg',
          title: 'Gaming Mouse M3',
          type: 'Accessories',
          specification: 'Optical, RGB, Wireless',
          guarantee: {
            start: '2023-08-25 11:30:00',
            end: '2024-08-25 11:30:00'
          },
          price: [
            { value: 100, symbol: 'USD', isDefault: 0 },
            { value: 2600, symbol: 'UAH', isDefault: 1 }
          ],
          order: 5,
          date: '2023-08-25 11:30:00'
        }
      ]
    }
  ],
  selectedOrder: null,
  deleteConfirmation: null
}

const mutations = {
  selectOrder(state: State, orderId: number) {
    state.selectedOrder = state.orders.find((order) => order.id === orderId) || null
  },
  confirmDelete(state: State, order: Order) {
    state.deleteConfirmation = order
  },
  deleteOrder(state: State, orderId: number) {
    state.orders = state.orders.filter((order) => order.id !== orderId)
    state.selectedOrder = null
    state.deleteConfirmation = null
  },

  deleteProductFromOrder(state: State, payload: { orderId: number; productId: number }) {
    const order = state.orders.find((order) => order.id === payload.orderId)

    if (order) {
      order.products = order.products.filter((product) => product.id !== payload.productId)
    }
  },

  closeDetails(state: State) {
    state.selectedOrder = null
  },
  cancelDelete(state: State) {
    state.deleteConfirmation = null
  }
}

const getters = {
  orders(state: State) {
    return state.orders
  },
  selectedOrder(state: State) {
    return state.selectedOrder
  },
  deleteConfirmation(state: State) {
    return state.deleteConfirmation
  },
  calculateTotalUSD: () => (products: Product[] | undefined) => {
    let totalUSD = 0
    if (products && products.length > 0) {
      products.forEach((product) => {
        const usdPrice = product.price.find((p) => p.symbol === 'USD')
        if (usdPrice) totalUSD += usdPrice.value
      })
    }

    return Number.isInteger(totalUSD) ? `${totalUSD} $` : `${totalUSD.toFixed(2)} $`
  },
  calculateTotalUAH: () => (products: Product[] | undefined) => {
    let totalUAH = 0
    if (products && products.length > 0) {
      products.forEach((product) => {
        const uahPrice = product.price.find((p) => p.symbol === 'UAH')
        if (uahPrice) totalUAH += uahPrice.value
      })
    }

    return Number.isInteger(totalUAH) ? `${totalUAH} UAH` : `${totalUAH.toFixed(2)} UAH`
  }
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state,
  mutations,
  getters
})
