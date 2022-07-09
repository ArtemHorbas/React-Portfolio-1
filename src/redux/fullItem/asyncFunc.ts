import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { Data } from "../data/type"
import { fullItem } from "./type"


export const fetchFull = createAsyncThunk<fullItem, string>(
	'fullItem/fetchFullStatus',
	async (id) => {
		const {data} = await axios.get<fullItem>(
			`https://62becd9f0bc9b125615fa020.mockapi.io/items/${id}`
			)
		return data
	}
  )