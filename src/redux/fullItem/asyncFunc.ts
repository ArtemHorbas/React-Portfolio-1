import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { Data } from "../data/type"
import { fullItem } from "./type"


export const fetchFull = createAsyncThunk<fullItem, string>(
	'fullItem/fetchFullStatus',
	async (id) => {
		const {data} = await axios.get<fullItem>(
			`https://62c6dda774e1381c0a6b1222.mockapi.io/data/${id}`
			)
		return data
	}
  )