import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <a href="#" className="header__brand" aria-label="Level Up Store inicio">
          <span className="header__logo">◈</span>

          <span className="header__name">
            LEVEL <strong>UP</strong>
          </span>
        </a>

        <nav className="header__nav" aria-label="Navegación principal">
          <a href="#catalogo">Productos</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;