import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min";
export function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light  Navbar_Color">
      <div className="container-fluid">
        <a className="navbar-brand text-light" href="/">
          MEHPRIYA🛒
        </a>
        <button
          className="navbar-toggler bg-light"
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
              <a
                className="nav-link active text-light"
                aria-current="page"
                href="/"
              >
                HOME
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="/product">
                PRODUCTS
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-light"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                COLLECTIONS
              </a>
              <ul
                className="dropdown-menu bg-light"
                aria-labelledby="navbarDropdown"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    KURTIES
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    SAREES
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    ABOUT US
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active text-light"
                aria-current="page"
                href="/login"
              >
                LOGIN
              </a>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success text-light"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
