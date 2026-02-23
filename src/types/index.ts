// Libro
export interface Book {
    id: string,
    title: string,
    author: string,
    genre: Genre,
    price: number,
    stock: number,
    cover: string,
    isbn: string
}

export type Genre = 
    | 'Ficcion'
    |'No-ficcion'
    |'Infantil'
    |'Ciencia'
    |'Historia'
    |'Fantasia'
    |'Biografia'
    |'Tecnologia'

// Carrito
export interface CartItem{
    book: Book
    quantity: number
    subtotal: number
}

export interface CartState {
    items: CartItem[]
    discount: number
    isProcessing: boolean
}

export type CartAction =
    | {type: 'ADD_ITEM', payload: Book}
    | {type: 'REMOVE_ITEM', payload: string}
    | {type: 'INCREMENT', payload: string}
    | {type: 'DECREMENT', payload: string}
    | {type: 'SET_DISCOUNT', payload: number}
    | {type: 'SET_PROCESSING', payload: boolean}
    | {type: 'CLEAR_CART'}

// Ventas
export interface Sale {
    id: string
    items: CartItem[]
    subtotal: number
    discount: number
    discountAmount: number
    total: number
    amountPaid: number
    change: number
    timestamp: Date
}

export interface SalesState {
    sales: Sale[]
}

export type SalesAction =
    | {type: 'ADD_SALE', payload: Sale}
    | {type: 'CLEAR_SALES'}

// ── Stats (para el Dashboard) ─────────────────────────────────────────
export interface DailySummary {
  totalRevenue: number
  totalSales: number
  totalUnits: number
  averageTicket: number
  topBook: string | null
}