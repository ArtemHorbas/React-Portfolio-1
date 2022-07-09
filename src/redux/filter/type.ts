export type SortType = {
	name: string,
	sortBy: 'rating' | 'title' | 'price' | '-rating' | '-title' | '-price'
}

export interface FilterSliceTypes{
	categorieIndex: number,
	sort: SortType,
	searchValue: string,
	page: number
}