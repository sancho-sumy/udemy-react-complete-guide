import { useContext } from 'react';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';
import clasess from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext)

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount
  }, 0)

  return (
    <button className={clasess.button} onClick={props.onClick}>
      <span>
        <CartIcon className={clasess.icon} />
      </span>
      <span>Your Cart</span>
      <span className={clasess.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
