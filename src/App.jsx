import { useEffect, useState } from "react";

import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import ProductList from "./components/ProductList/ProductList";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import Footer from "./components/Footer/Footer";

import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getProducts() {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(
          "https://dummyjson.com/products"
        );

        if (!response.ok) {
          throw new Error(
            "No fue posible cargar los productos."
          );
        }

        const data = await response.json();

        setProducts(data.products);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    getProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title
      .toLowerCase()
      .includes(search.toLowerCase().trim())
  );

  return (
    <div className="app">
      <Header />

      <main>
        <section className="hero">
          <div className="container hero__content">
            <span className="hero__eyebrow">
              TODO LO QUE BUSCAS EN UN SOLO LUGAR
            </span>

            <h1 className="hero__title">
              Descubre más.
              <span> Elige mejor.</span>
            </h1>

            <p className="hero__description">
              Explora productos de distintas categorías,
              compara opciones y encuentra lo que necesitas
              en Level Up Store.
            </p>

          </div>
        </section>

        <section
          className="catalog"
          id="catalogo"
        >
          <div className="container">
            <div className="catalog__header">
              <div>
                <span className="catalog__eyebrow">
                  CATÁLOGO
                </span>

                <h2 className="catalog__title">
                  Productos destacados
                </h2>

                <p className="catalog__description">
                  Explora nuestro catálogo y encuentra
                  productos para diferentes necesidades.
                </p>
              </div>

              <SearchBar
                value={search}
                onChange={setSearch}
              />
            </div>

            {loading && <Loader />}

            {!loading && error && (
              <ErrorMessage message={error} />
            )}

            {!loading && !error && (
              <>
                <div className="catalog__results">
                  {filteredProducts.length} productos encontrados
                </div>

                <ProductList
                  products={filteredProducts}
                />
              </>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;