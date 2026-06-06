import { createSlice, type PayloadAction} from "@reduxjs/toolkit";

export interface CartItem {
    id: number;
    title: string;
    price: number;
    colorId: string;
    quantity: number;
}

interface CartState {
    items: CartItem[]
    isOpen: boolean
}

const initialState: CartState = {
    items: [],
    isOpen: false
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartItem> ) => {
            const existing = state.items.find((i) => i.id === action.payload.id && i.colorId === action.payload.colorId)

            if(existing) {
                existing.quantity += 1
            } else {
                state.items.push({...action.payload, quantity: 1})
            }

        },

        increaseQuantity: (state, action: PayloadAction<{id: number; colorId: string}>) => {
            const item = state.items.find((i) => i.id === action.payload.id && i.colorId === action.payload.colorId)
            if (item) item.quantity += 1;
        },

        decreaseQuantity: (state, action: PayloadAction<{id: number; colorId: string}>) => {
            const item = state.items.find((i) => i.id === action.payload.id && i.colorId === action.payload.colorId)
            
            if (!item) return

            item.quantity -=1

            if (item.quantity < 0) {
                state.items = state.items.filter((i) => !(i.id === action.payload.id && i.colorId === action.payload.colorId))
            }
        },

        removeFromCart: (state, action: PayloadAction<{id: number; colorId: string}>) => {
            state.items = state.items.filter((i) => !(i.id === action.payload.id && i.colorId === action.payload.colorId))

        },

        openCart: (state) => {
            state.isOpen = true
        },

        closeCart: (state) => {
            state.isOpen = false
        },

        toggleCart: (state) => {
            state.isOpen != state.isOpen
        }

    }

})

export const {
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    openCart,
    closeCart,
    toggleCart
} = cartSlice.actions

export default cartSlice.reducer