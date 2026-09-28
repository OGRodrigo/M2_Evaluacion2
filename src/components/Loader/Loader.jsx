import "./Loader.css";

function Loader() {
  return (
    <div className="loader" role="status" aria-live="polite">
      <div className="loader__spinner"></div>
      <p>Cargando productos...</p>
    </div>
  );
}

export default Loader;
