import { configureStore } from '@reduxjs/toolkit';
import { useSelector, TypedUseSelectorHook, useDispatch } from 'react-redux';
import  data  from './data/slice';
import filter from './filter/slice';
import  fullItem from './fullItem/slice';
import cart from './cart/slice';


export const store = configureStore({
  reducer: 
  {
	data,
	filter,
	fullItem,
	cart
  },
});

export type RootState = ReturnType<typeof store.getState>

type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector


