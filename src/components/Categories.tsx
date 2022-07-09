import React from 'react'
import { setCategorie } from '../redux/filter/slice'
import { useAppDispatch, useAppSelector } from '../redux/store'

const Categories: React.FC = React.memo(() => {

	const dispatch = useAppDispatch()
	const {categorieIndex} = useAppSelector(state => state.filter)

  
	const categories: string[] = ["All","Meats","Vegetarians","Grill","Hot chilli","Closed"]
	
	const onClickLi = (index: number) =>{
		dispatch(setCategorie(index))
	}
	
	
	return (
	<div className="categories">
		<ul>
			{categories.map((categoryName, index) => ( 
				<li 
					key={categoryName}
					className={index === categorieIndex  ? 'active' : ''}
					onClick={() => onClickLi(index)}
				>
					{categoryName}
				</li>
			))}			
		</ul>
  	</div>
  )
})

export default Categories