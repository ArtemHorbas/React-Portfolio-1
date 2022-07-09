import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { calcTotalPrice } from '../../utils/calcPrice'
import { getCartFromLS } from '../../utils/getCartFromLS'
import { CartItem, cartSliceTypes } from './type'

const {items, totalPrice} = getCartFromLS()



const initialState: cartSliceTypes = {
	items,
	totalPrice
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
	addItem(state, action: PayloadAction<CartItem>)  {
		const findItem = state.items.find(item => item.id === action.payload.id)

		if(findItem){
			findItem.count++
		}else{
			state.items.push(action.payload)
		}
		
		state.totalPrice = calcTotalPrice(state.items)
	},
	minusItem(state, action: PayloadAction<string>)  {
		const finditem = state.items.find(item => item.id === action.payload)
		if(finditem){finditem.count--}

		state.totalPrice = calcTotalPrice(state.items)
	},
	removeItem(state, action: PayloadAction<string>)  {
		state.items = state.items.filter(item => item.id !== action.payload)

		state.totalPrice = calcTotalPrice(state.items)
	},
	clearItems(state)  {
		state.items = []
		state.totalPrice = 0
	},
  },
})

export const { addItem, minusItem, removeItem, clearItems } = cartSlice.actions

export default cartSlice.reducer