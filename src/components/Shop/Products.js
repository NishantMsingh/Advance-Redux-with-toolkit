import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  { id: "p1", price: 6, title: "My first book", description: "lorem lorrem thi that and what was that" },
  { id: "p2", price: 16, title: "My second book", description: "lorem lorrem thi that and what was that" },
  { id: "p3", price: 116, title: "My third book", description: "lorem lorrem thi that and what was that" }
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
