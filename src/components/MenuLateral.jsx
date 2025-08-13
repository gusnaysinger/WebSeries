import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./MenuLateral.css";

function MenuLateral() {
  return (
    <div className="menu-lateral">
      {/* Botão que abre o menu */}
      <button
        className="btn btn-outline-success"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#menuLateral"
        aria-controls="menuLateral"
      >
        <i className="fa-solid fa-bars"></i>
      </button>

      {/* Menu Lateral */}
      <div
        className="offcanvas offcanvas-end custom-offcanvas"
        tabIndex="-1"
        id="menuLateral"
        aria-labelledby="menuLateralLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="menuLateralLabel">
            Menu
          </h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <Router>

          <div className="offcanvas-body">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Link className="text-decoration-none" to="/">
                  <i className="fa-solid fa-house"></i> Home
                </Link>
              </li>
              <li className="list-group-item">
                <Link to="/user" className="text-decoration-none">
                  <i className="fa-solid fa-user"></i> Perfil
                </Link>
              </li>
              <li className="list-group-item">
                <Link to="/amigos" className="text-decoration-none">
                  <i className="fa-solid fa-users"></i> Amigos
                </Link>
              </li>
              <li className="list-group-item">
                <Link to="/addamigos" className="text-decoration-none">
                  <i className="fa-solid fa-user-plus"></i> Adicionar Amigos
                </Link>
              </li>
              <li className="list-group-item">
                <Link to="/AddSeries" className="text-decoration-none">
                  <i className="fa-solid fa-plus"></i> Adicionar Série
                </Link>
              </li>
            </ul>
          </div>
        </Router>
        <div className="offcanvas-footer mt-3">
          <div className="d-flex justify-content-between align-items-center">
            <span>© 2023 WebSeries</span>
            <a href="#logout" className="text-decoration-none text">
              <i className="fa-solid fa-right-from-bracket"></i> Sair
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuLateral;
