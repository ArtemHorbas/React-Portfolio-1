import {  createSlice } from '@reduxjs/toolkit'
import { fetchItems } from './asyncFunc'
import {   dataSliceTypes, Status } from './type'


const initialState: dataSliceTypes = {
	items: [],
	status: Status.FIRST
}

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
	builder.addCase(fetchItems.pending, (state) => {
		state.items = []
		state.status = Status.LOADING
	});
	builder.addCase(fetchItems.fulfilled, (state, action) => {
		state.status = Status.SUCCESS
		state.items = action.payload
	});
	builder.addCase(fetchItems.rejected, (state) => {
		state.status = Status.ERROR
		state.items = []
	});
  },
  
})

export default dataSlice.reducer