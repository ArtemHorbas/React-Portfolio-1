import React from 'react';
import {Link, useParams} from 'react-router-dom';
import { fetchFull } from '../redux/fullItem/asyncFunc';
import { useAppDispatch, useAppSelector } from '../redux/store';

const FullPizza: React.FC = () => {
	
	const {item} = useAppSelector(state => state.fullItem)

	const {id} = useParams()
	const dispatch = useAppDispatch()

	React.useEffect(() => {
		if(id){
			dispatch(fetchFull(id))
		}
	}, [])


	return (
		
		<div className="container ">
			<img src={item.imageUrl} />
			<h2>{item.title}</h2>
			<h4>{item.price} €</h4>		
			<Link to="/">
				<button className="button button--outline button--add">
					<span>Turn Back</span>
				</button>
			</Link>
		</div>
  )
}

export default FullPizza