import React from 'react';
import { setSearchValue } from '../../redux/filter/slice';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import cl from './MyInput.module.scss';
import  debounce from 'lodash.debounce';


const MyInput: React.FC = () => {

	
	const [value, setValue] = React.useState('')

	const dispatch = useAppDispatch()

	const myinp = React.useRef<HTMLInputElement>(null)

	const updateSearchValue = React.useCallback(debounce((value) => {
		dispatch(setSearchValue(value))
	}, 275), [])


	const deleteText = () => {
		setValue('')
		dispatch(setSearchValue(''))
		myinp.current?.focus()
	}

	const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value)
		updateSearchValue(event.target.value)
	}

	return (
		<form className={cl.root}>
			<svg onClick={deleteText} className={cl.img} width="18" height="23" viewBox="0 0 35 39" fill="none" xmlns="http://www.w3.org/2000/svg">
				<line x1="34.614" y1="38.3179" x2="20.614" y2="21.3179" stroke="black"/>
				<circle cx="12.5" cy="12.5" r="12" fill="white" stroke="black"/>
			</svg>
			<input 
				className={cl.input} 
				type="text" 
				placeholder='Looking for...' 
				value={value}
				onChange={(event) => onChangeInput(event)}
				ref={myinp}
			/>
		</form>	
	)
}

export default MyInput