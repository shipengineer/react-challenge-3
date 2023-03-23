import Card from '../UI/Card';
import styles from './ProductItem.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { productActions } from '../../store/base-products';

const ProductItem = () => {
  const item = useSelector((state) => {
    return state.products.base.item1;
  });
  const [title, price, description] = [
    item.title,
    item.price,
    item.description,
  ];
  const dispatch = useDispatch();
  const onAddHandler = () => {
    dispatch(productActions.increment());
  };

  return (
    <li className={styles.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={styles.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={styles.actions}>
          <button onClick={onAddHandler}>Добавить в Корзину</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
