import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Status } from '../data/type';
import { fetchFull } from './asyncFunc';
import { FullItemSlice } from './type';



const initialState: FullItemSlice = {
	item: {
		imageUrl: '',
		title: '',
		price: 0
	},
	status: Status.FIRST
}

export const fullItemSlice = createSlice({
  name: 'fullItem',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
	builder.addCase(fetchFull.pending, (state) => {
		state.status = Status.LOADING
		state.item = {
			imageUrl: '',
			title: '',
			price: 0
		}
	});
	builder.addCase(fetchFull.fulfilled, (state, action) => {
		state.status = Status.SUCCESS
		state.item = action.payload
		// console.log(state.status)
	});
	builder.addCase(fetchFull.rejected, (state) => {
		state.status = Status.ERROR
		state.item = {
			imageUrl: '',
			title: '',
			price: 0
		}
	});
  },
})

export default fullItemSlice.reducer