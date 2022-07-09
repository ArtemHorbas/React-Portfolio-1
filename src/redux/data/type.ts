export interface urlPrams {
	page: number
	category: string
	sortBy: string
	order: string
}

export type  Data = {
	id: string,
	imageUrl: string,
	title: string,
	types: number[],
	sizes: number[],
	price: number,
	category: number,
	rating: number
}

export enum Status {
	FIRST = 'first',
	LOADING = 'loading',
	SUCCESS = 'success',
	ERROR = 'error'
} 	

export interface dataSliceTypes{
	items: Data[]
	status: Status
}