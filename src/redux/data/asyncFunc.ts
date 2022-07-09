import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { useAppSelector } from "../store"
import { Data, urlPrams } from "./type"

export const fetchItems = createAsyncThunk<Data[], urlPrams>(
	'data/fetchItemsStatus',
	async ({page, category, sortBy, order}) => {
		const {data} = await axios.get<Data[]>(
			`https://62c6dda774e1381c0a6b1222.mockapi.io/data?page=${page}&limit=4&${category}&sortBy=${sortBy}&order=${order}`
			)
		return data
	}
  )