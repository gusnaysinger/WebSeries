import "./home.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";

//function App() {
export default function Home() {
  return (
    <>
      <div className="top">
        <h4>Suas Series</h4>
      </div>
      <div className="content">
        <div className="serie">
          <div className="card" style={{ width: "18rem" }}>
            <img
              src="./media/Banners/Breaking-Bad-Logo-500x281.jpg"
              className="card-img-top"
              alt="Breaking Bad"
            />
            <div className="card-body">
              <h5 className="card-title">Breaking Bad</h5>
              <p className="card-text">
                Breaking Bad acompanha Walter White, um professor de química
                que, após ser diagnosticado com câncer, começa a produzir
                metanfetamina para garantir o futuro de sua família, entrando em
                um perigoso mundo do crime.
              </p>
              <div className="stars">
                <h6>Sua Nota:</h6>
                <span>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <input type="hidden" value={5} />
                </span>
              </div>
              <br />
              <a href="#" className="btn btn-secondary">
                Mais Detalhes
              </a>
            </div>
          </div>
          <div className="card" style={{ width: "18rem" }}>
            <img
              src="./media/Banners/StrangerThings.png"
              className="card-img-top"
              alt="Stranger Things"
            />
            <div className="card-body">
              <h5 className="card-title">Stranger Things</h5>
              <p className="card-text">
                Stranger Things segue um grupo de crianças que enfrenta eventos
                sobrenaturais em sua pequena cidade, incluindo o desaparecimento
                de um amigo e a aparição de uma garota com poderes especiais.
              </p>
              <div className="stars">
                <h6>Sua Nota:</h6>
                <span>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <input type="hidden" value={5} />
                </span>
              </div>
              <br />
              <a href="#" className="btn btn-secondary">
                Mais Detalhes
              </a>
            </div>
          </div>
          <div className="card" style={{ width: "18rem" }}>
            <img
              src="./media/Banners/GameofThrones.png"
              className="card-img-top"
              alt="Game of Thrones"
            />
            <div className="card-body">
              <h5 className="card-title">Game of Thrones</h5>
              <p className="card-text">
                Game of Thrones narra a luta pelo poder entre famílias nobres em
                Westeros, onde alianças são formadas e traídas em busca do Trono
                de Ferro.
              </p>
              <div className="stars">
                <h6>Sua Nota:</h6>
                <span>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <input type="hidden" value={5} />
                </span>
              </div>
              <br />
              <a href="#" className="btn btn-secondary">
                Mais Detalhes
              </a>
            </div>
          </div>
          <div className="card" style={{ width: "18rem" }}>
            <img
              src="./media/Banners/TheWitcher.png"
              className="card-img-top"
              alt="The Witcher"
            />
            <div className="card-body">
              <h5 className="card-title">The Witcher</h5>
              <p className="card-text">
                The Witcher acompanha Geralt de Rívia, um caçador de monstros,
                enquanto navega por um mundo repleto de magia, intrigas e
                perigos.
              </p>
              <div className="stars">
                <h6>Sua Nota:</h6>
                <span>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <input type="hidden" value={5} />
                </span>
              </div>
              <br />
              <a href="#" className="btn btn-secondary">
                Mais Detalhes
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
