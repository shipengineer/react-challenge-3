import styles from './CartButton.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { mainActions } from '../../store/main-slice';
const CartButton = () => {
  const dispatch = useDispatch();
  const toggleCartHandler = () => {
    dispatch(mainActions.toggleCartVisibility());
  };
  const totalQantity = useSelector((state) => {
    return state.products.base.item1.quantity;
  });
  return (
    <button className={styles.button} onClick={toggleCartHandler}>
      <span>Корзина</span>
      <span className={styles.badge}>{totalQantity}</span>
    </button>
  );
};

export default CartButton;
