import { useState } from "react";

import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import ProductList from "./components/ProductList/ProductList";
import Footer from "./components/Footer/Footer";

import { mockGames } from "./data/mockGames";

import "./App.css";

function App() {
  const [search, setSearch] = useState("");

  const filteredGames = mockGames.filter((game) =>
    game.title.toLowerCase().includes(search.toLowerCase().trim())
  );

  return (
    <div className="app">
      <Header />

      <main>
        <section className="hero">
          <div className="container hero__content">
            <span className="hero__eyebrow">TU PRÓXIMA PARTIDA EMPIEZA AQUÍ</span>

            <h1 className="hero__title">
              Juega más.
              <span> Elige mejor.</span>
            </h1>

            <p className="hero__description">
              Explora una selección de videojuegos para PC, PlayStation,
              Xbox y Nintendo Switch.
            </p>
          </div>
        </section>

        <section className="catalog" id="catalogo">
          <div className="container">
            <div className="catalog__header">
              <div>
                <span className="catalog__eyebrow">CATÁLOGO</span>
                <h2 className="catalog__title">Videojuegos destacados</h2>
              </div>

              <SearchBar value={search} onChange={setSearch} />
            </div>

            <div className="catalog__results">
              {filteredGames.length} juegos encontrados
            </div>

            <ProductList products={filteredGames} />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
