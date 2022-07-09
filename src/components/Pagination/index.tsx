import React from 'react';
import cl from './Pagination.module.scss';
import ReactPaginate from 'react-paginate';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { setPage } from '../../redux/filter/slice';



const Pagination: React.FC = React.memo(() => {
  
	const {page} = useAppSelector(state => state.filter)

	const dispatch = useAppDispatch()

	return (
	<ReactPaginate
		className={cl.root}
		breakLabel="..."
		nextLabel=">"
		previousLabel="<"
		onPageChange={(event) => dispatch(setPage(event.selected + 1))}
		pageRangeDisplayed={4}
		pageCount={3}
		forcePage={page - 1}
  	/>
  )
})

export default Pagination