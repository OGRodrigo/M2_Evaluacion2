import "./ErrorMessage.css";

function ErrorMessage({ message }) {
  return (
    <div className="error-message" role="alert">
      <span className="error-message__icon" aria-hidden="true">
        ⚠️
      </span>

      <div>
        <h3>No pudimos cargar los productos</h3>
        <p>{message || "Ocurrió un problema inesperado."}</p>
      </div>
    </div>
  );
}

export default ErrorMessage;
