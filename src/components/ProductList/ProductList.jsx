import ProductCard from "../ProductCard/ProductCard";
import "./ProductList.css";

function ProductList({ products }) {
  if (products.length === 0) {
    return (
      <div className="product-list__empty">
        <h3>No encontramos productos</h3>
        <p>Prueba con otro nombre.</p>
      </div>
    );
  }

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          title={product.title}
          price={product.price}
          category={product.category}
          thumbnail={product.thumbnail}
          rating={product.rating}
          brand={product.brand}
        />
      ))}
    </div>
  );
}

export default ProductList;
