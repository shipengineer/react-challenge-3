import ProductItem from './ProductItem';
import styles from './Products.module.css';

const Products = (props) => {
  return (
    <section className={styles.products}>
      <h2>В нашем магазине товары самого высокого качества</h2>
      <ul>
        <ProductItem />
      </ul>
    </section>
  );
};

export default Products;
