import { Data, Status } from "../data/type";

export type fullItem = {
	imageUrl: string,
	title: string,
	price: number
}

export interface FullItemSlice {
	item: fullItem,
	status: Status
}