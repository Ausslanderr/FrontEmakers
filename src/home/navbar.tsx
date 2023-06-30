

import logo from '../assets/images/icone.png'; // substitua o caminho pela localização correta da imagem

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary py-3">
      <div className="container-fluid">
        <img src={logo} alt="GameDame" style={{width:'45px', height:'45px'}} />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Lançamentos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Populares
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Promoções
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Gêneros
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Indie
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Fighting
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Rpg
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Login
            </button>
            <button className="btn btn-outline-success" type="submit">
              Signup
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
