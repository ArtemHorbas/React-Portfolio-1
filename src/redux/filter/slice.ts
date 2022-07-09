import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FilterSliceTypes, SortType } from './type'


const initialState: FilterSliceTypes = {
	categorieIndex: 0,
	sort: {
		name: 'Popularity(DESC)',
		sortBy: 'rating',
	},
	searchValue: '',
	page: 1,
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
	setCategorie(state, action: PayloadAction<number>)  {
		state.categorieIndex = action.payload
	},
	setSort(state, action: PayloadAction<SortType>){
		state.sort = action.payload
	},
	setSearchValue(state, action: PayloadAction<string>){
		state.searchValue = action.payload
	},
	setPage(state, action: PayloadAction<number>){
		state.page = action.payload
	},
	setFilters(state, action: PayloadAction<FilterSliceTypes>){
		state.page = Number(action.payload.page)
		state.sort = action.payload.sort
		state.categorieIndex = Number(action.payload.categorieIndex)
		// console.log(state.categorieIndex)
	},
  },
})

export const { setCategorie, setSort, setSearchValue, setPage, setFilters } = filterSlice.actions

export default filterSlice.reducer