import React from 'react';
import { Link } from 'react-router-dom';

const CartEmpty: React.FC = () => {
  return (
	<div className="cart cart--empty">
		<h2>
			Cart is empty <span>😕</span>
		</h2>
		<p>
			Maybe you haven't ordered a pizza.
		<br />
			Back to main page to choose your pizzas.
		</p>
		<img src='https://raw.githubusercontent.com/Archakov06/react-pizza-v2/master/src/assets/img/empty-cart.png' alt="Empty cart" />
		<Link to="/" className="button button--black">
		<span>Turn Back</span>
		</Link>
  </div>
  )
}

export default CartEmpty