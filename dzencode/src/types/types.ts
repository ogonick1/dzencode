export interface ProductGuarantee {
  start: string
  end: string
}

export interface ProductPrice {
  value: number
  symbol: string
  isDefault: number
}

export interface Product {
  id: number
  serialNumber: number
  isNew: number
  photo: string
  title: string
  type: string
  specification: string
  guarantee: ProductGuarantee
  price: ProductPrice[]
  order: number
  date: string
}

export interface Order {
  id: number
  title: string
  date: string
  description: string
  products: Product[]
}

export interface State {
  products: Product[]
}

export interface OrdersState {
  orders: Order[]
  selectedOrder: Order | null
  deleteConfirmation: Order | null
}
