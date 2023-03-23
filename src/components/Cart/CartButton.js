import styles from './CartButton.module.css';
import { useSelector } from 'react-redux';
const CartButton = () => {
  const totalQantity = useSelector((state) => {
    
    return state.products.base.item1.quantity;
  });
  return (
    <button className={styles.button}>
      <span>Корзина</span>
      <span className={styles.badge}>{totalQantity}</span>
    </button>
  );
};

export default CartButton;
