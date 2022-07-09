import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { useAppSelector } from "../store"
import { Data, urlPrams } from "./type"

export const fetchItems = createAsyncThunk<Data[], urlPrams>(
	'data/fetchItemsStatus',
	async ({page, category, sortBy, order}) => {
		const {data} = await axios.get<Data[]>(
			`https://62becd9f0bc9b125615fa020.mockapi.io/items?page=${page}&limit=4&${category}&sortBy=${sortBy}&order=${order}`
			)
		return data
	}
  )