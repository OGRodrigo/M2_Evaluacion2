import "./SearchBar.css";

function SearchBar({ value, onChange }) {
  return (
    <div className="search-bar">
      <label htmlFor="product-search" className="search-bar__label">
        Buscar productos
      </label>

      <div className="search-bar__field">
        <span className="search-bar__icon" aria-hidden="true">🔎</span>

        <input
          id="product-search"
          className="search-bar__input"
          type="search"
          placeholder="Buscar producto por nombre..."
          value={value}
          onChange={(event) => onChange(event.target.value)}
        />
      </div>
    </div>
  );
}

export default SearchBar;
