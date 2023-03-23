import styles from './CartItem.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { productActions } from '../../store/base-products';
const CartItem = () => {
  const item = useSelector((state) => {
    return state.products.base.item1;
  });
  const [title, price, quantity] = [item.title, item.price, item.quantity];
  const dispatch = useDispatch();
  const onAddHandler = () => {
    dispatch(productActions.increment());
  };
  const onRemoveHandler = () => {
    dispatch(productActions.decrement());
  };
  return (
    <li className={styles.item}>
      <header>
        <h3>{title}</h3>
        <div className={styles.price}>
          ${(price * quantity).toFixed(2)}
          <span className={styles['item-price']}>
            (${price.toFixed(2)} / шт.)
          </span>
        </div>
      </header>
      <div className={styles.details}>
        <div className={styles.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={styles.actions}>
          <button onClick={onRemoveHandler}>-</button>
          <button onClick={onAddHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
