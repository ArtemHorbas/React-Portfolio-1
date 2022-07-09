
export type CartItem = {
	id: string,
	title: string,
	price: number,
	imageUrl: string,
	type:  string,
	size: number,
	count: number
}


export interface cartSliceTypes{
	items: CartItem[]
	totalPrice: number
}