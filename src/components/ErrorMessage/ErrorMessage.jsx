import "./ErrorMessage.css";

function ErrorMessage({ message }) {
  return (
    <div className="error-message" role="alert">
      <span className="error-message__icon">⚠️</span>
      <div>
        <h3>No pudimos cargar los videojuegos</h3>
        <p>{message || "Ocurrió un problema inesperado."}</p>
      </div>
    </div>
  );
}

export default ErrorMessage;
