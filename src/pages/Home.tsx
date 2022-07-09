
import React from 'react';
import qs from 'qs';
import Categories from '../components/Categories';
import Pagination from '../components/Pagination';
import PizzaBlock from '../components/PizzaBlock/PizzaBlock';
import Sort from '../components/Sort';
import { fetchItems } from '../redux/data/asyncFunc';
import {  useAppDispatch, useAppSelector } from '../redux/store';
import {Status} from '../redux/data/type'
import { Skeleton } from '../components/PizzaBlock/Skeleton';
import { useNavigate } from 'react-router-dom';
import { setFilters } from '../redux/filter/slice';
import { FilterSliceTypes } from '../redux/filter/type';



const Home: React.FC = () => {

	const dispatch = useAppDispatch()
	const navigate = useNavigate()

	const [isMounted, setIsMounted] = React.useState(false)
	const isSearch = React.useRef(false)
	
	const {items, status} = useAppSelector(state => state.data)

	const {page, categorieIndex, searchValue, sort} = useAppSelector(state => state.filter)

	const axiosPizzas = () => {
		const category = categorieIndex > 0 ? `category=${categorieIndex}` : '';
		const sortBy = sort.sortBy.replace('-', '')
		const order = sort.sortBy.includes('-') ? 'asc' : 'desc';
		
		
		dispatch(
			fetchItems(
				{
					page,
					category,
					sortBy,
					order
				}
			)
		)
	}

	React.useEffect(() => {
		if(isMounted === true){
			const queryString = qs.stringify({
				page, categorieIndex, sort
			});
			navigate(`?${queryString}`)
		}

		setIsMounted(true)
	}, [page, categorieIndex, sort])


	React.useEffect(() => {
		if(window.location.search){
			const params = ((qs.parse(window.location.search.substring(1)) as unknown) as  FilterSliceTypes)
			
			dispatch(setFilters(params))

			isSearch.current = true
		}
	},[])

	React.useEffect(() => {
		if(!isSearch.current){
			axiosPizzas()
		}

		isSearch.current = false
	},[page, categorieIndex, sort])

	
	const data = items
	.filter(items => items.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()))
	.map(item => (
		<PizzaBlock {...item} key={item.id} />
	))

	const skelet = [...new Array(4)].map((item) => <Skeleton key={Math.random()} />)


	return (
	<div className="container">
		<div className="content__top">
			<Categories />
			<Sort />
          </div>
          <h2 className="content__title"></h2>
			{status === Status.ERROR 
			? (<div className="content__error-info">
					<h2>Произошла ошибка 😕</h2>
					<p>К сожалению, не удалось получить питсы. Попробуйте повторить попытку позже.</p>
			  </div>)
			: (<div className="content__items">{status === Status.LOADING ? skelet : data}</div>)}
		  <Pagination />
	</div>
  )
}

export default Home