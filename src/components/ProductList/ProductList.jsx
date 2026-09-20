import ProductCard from "../ProductCard/ProductCard";
import "./ProductList.css";

function ProductList({ products }) {
  if (products.length === 0) {
    return (
      <div className="product-list__empty">
        <span>🎮</span>
        <h3>No encontramos videojuegos</h3>
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
          platform={product.platform}
          thumbnail={product.thumbnail}
          rating={product.rating}
        />
      ))}
    </div>
  );
}

export default ProductList;
