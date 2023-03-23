import Card from '../UI/Card';
import styles from './Cart.module.css';
import CartItem from './CartItem';

const Cart = () => {
  return (
    <Card className={styles.cart}>
      <h2>Мои Покупки</h2>
      <ul>
        <CartItem />
      </ul>
    </Card>
  );
};

export default Cart;
