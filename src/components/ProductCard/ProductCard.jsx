import "./ProductCard.css";

function ProductCard({
  title,
  price,
  category,
  platform,
  thumbnail,
  rating,
}) {
  const formattedPrice = new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
    maximumFractionDigits: 0,
  }).format(price);

  return (
    <article className="product-card">
      <div
        className="product-card__media"
        style={{ "--cover-image": `url(${thumbnail})` }}
      >
        <img
          className="product-card__image"
          src={thumbnail}
          alt={`Portada de ${title}`}
        />

        <span className="product-card__category">
          {category}
        </span>
      </div>

      <div className="product-card__body">
        <p className="product-card__platform">
          🎮 {platform}
        </p>

        <h3 className="product-card__title">
          {title}
        </h3>

        <p
          className="product-card__rating"
          aria-label={`Puntuación ${rating} de 5`}
        >
          ⭐ {rating}
        </p>

        <div className="product-card__footer">
          <strong className="product-card__price">
            {formattedPrice}
          </strong>

          <button
            className="product-card__button"
            type="button"
          >
            Ver juego
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;