// App.jsx
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import logo from "./assets/icon.png";
import AddSeries from "./pages/addSeries.jsx";
import Profile from "./pages/Profile.jsx";
import Friends from "./pages/Friends.jsx";
import AddFriends from "./pages/AddFriend.jsx";

function App() {
  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <img
            src={logo}
            alt="logo"
            width="40"
            height="40"
            className="d-inline-block align-text-top"
          />
          <div className="d-flex align-items-center">
            {/* Barra de busca */}
            <form className="d-flex me-2" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </form>

            {/* Botão que abre o menu lateral */}
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

              <div className="offcanvas-body">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <Link className="text-decoration-none" to="/">
                      <i className="fa-solid fa-house"></i> Home
                    </Link>
                  </li>
                  <li className="list-group-item">
                    <Link to="/Profile" className="text-decoration-none">
                      <i className="fa-solid fa-user"></i> Perfil
                    </Link>
                  </li>
                  <li className="list-group-item">
                    <Link to="/Friends" className="text-decoration-none">
                      <i className="fa-solid fa-users"></i> Amigos
                    </Link>
                  </li>
                  <li className="list-group-item">
                    <Link to="/AddFriends" className="text-decoration-none">
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
        </div>
      </nav>

      {/* Rotas */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Friends" element={<Friends />} />
        <Route path="/AddFriends" element={<AddFriends />} />
        <Route path="/AddSeries" element={<AddSeries />} />
      </Routes>
    </>
  );
}

export default App;
