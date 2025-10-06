import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import RatingStars from "../components/RatingStars";
import "./addSerie.css";
import { useState } from "react";

export default function AddSeries() {
  const API_KEY = "b11672b2b15080e415e1189c03f1a0f9";

  const [userRating, setUserRating] = useState(0);

  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedSeries, setSelectedSeries] = useState(null);

  const [preview, setPreview] = useState(null);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [searchGenre, setSearchGenre] = useState("");

  const genres = [
    "Ação",
    "Adulto",
    "Animação",
    "Anime",
    "Aventura",
    "Arte",
    "Biografia",
    "Ciência",
    "Comédia",
    "Crime",
    "Culinária",
    "Curta",
    "Documentário",
    "Drama",
    "Dorama",
    "Educação",
    "Esporte",
    "Experimental",
    "Família",
    "Fantasia",
    "Ficção Científica",
    "Game Show",
    "Guerra",
    "Histórico",
    "Infantil",
    "Legal",
    "Medicina",
    "Minissérie",
    "Mistério",
    "Moda",
    "Musical",
    "Natureza",
    "Negócios",
    "Notícias",
    "Policial",
    "Política",
    "Reality",
    "Religião",
    "Romance",
    "Sitcom",
    "Supernatural",
    "Suspense",
    "Talk Show",
    "Tecnologia",
    "Terror",
    "Viagem",
    "Western"
  ];

  // Atualiza texto e busca sugestões de séries
  const handleInputChange = async (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.length > 2) {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&language=pt-BR&query=${value}`
      );
      const data = await res.json();
      setSuggestions(data.results.slice(0, 5));
    } else {
      setSuggestions([]);
    }
  };

  // Busca detalhes da série
  const fetchSeriesDetails = async (serieId) => {
    const res = await fetch(
      `https://api.themoviedb.org/3/tv/${serieId}?api_key=${API_KEY}&language=pt-BR`
    );
    const data = await res.json();
    setSelectedSeries(data);
    setSelectedGenres(data.genres ? data.genres.map((g) => g.name) : []);
  };

  // Clique no botão de busca
  const handleSearchClick = async () => {
    if (!suggestions.length) return;
    const serie =
      suggestions.find((s) => s.name.toLowerCase() === query.toLowerCase()) ||
      suggestions[0];
    fetchSeriesDetails(serie.id);
  };

  // Preview imagem manual
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="container mt-4">
      <h4>Adicionar Série</h4>
      <form>
        <div className="row">
          {/* Preview e upload */}
          <div className="col-4">
            <div className="Banner preview-box mb-3">
              {preview ? (
                <img src={preview} alt="Preview" className="preview-img" />
              )
               : (
                <span></span>
              )}
            </div>
            <input
              type="file"
              accept="image/*"
              className="form-control"
              onChange={handleImageChange}
            />
          </div>

          {/* Infos da série */}
          <div className="col-8">
            {/* Input + Botão */}
            <div className="input-group mb-2">
              <input
                type="text"
                className="form-control"
                placeholder="Título da Série"
                value={query}
                onChange={handleInputChange}
              />
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={handleSearchClick}
              >
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>

            {/* Lista de sugestões */}
            {suggestions.length > 0 && (
              <ul className="list-group mb-3">
                {suggestions.map((serie) => (
                  <li
                    key={serie.id}
                    className="list-group-item list-group-item-action"
                    onClick={() => {
                      setSelectedSeries(serie);
                      setQuery(serie.name);
                      setSuggestions([]);

                      // Atualiza o preview com a capa da API
                      if (serie.poster_path) {
                        setPreview(
                          `https://image.tmdb.org/t/p/w500${serie.poster_path}`
                        );
                      }
                      // Busca os detalhes (inclui gêneros e descrição)
                      fetchSeriesDetails(serie.id);
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    {serie.name}
                  </li>
                ))}
              </ul>
            )}

            {/* Gêneros */}
            <div className="mb-2">
              <label className="form-label">Gênero</label>

              {selectedSeries && selectedSeries.genres?.length > 0 ? (
                // Mostra somente os gêneros vindos da API
                <div className="p-2 border rounded">
                  {selectedGenres.join(", ")}
                </div>
              ) : (
                // Input com sugestões e tags
                <div>
                  {/* Tags já selecionadas */}
                  <div className="mb-2 d-flex flex-wrap gap-2">
                    {selectedGenres.map((genre) => (
                      <span
                        key={genre}
                        className="badge bg-secondary d-flex align-items-center"
                      >
                        {genre}
                        <button
                          type="button"
                          className="btn-close btn-close-white ms-2"
                          aria-label="Remover"
                          onClick={() =>
                            setSelectedGenres(
                              selectedGenres.filter((g) => g !== genre)
                            )
                          }
                          style={{ fontSize: "0.6rem" }}
                        ></button>
                      </span>
                    ))}
                  </div>

                  {/* Input de busca */}
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Digite um gênero..."
                    value={searchGenre}
                    onChange={(e) => setSearchGenre(e.target.value)}
                  />

                  {/* Sugestões */}
                  {searchGenre && (
                    <ul
                      className="list-group mt-1"
                      style={{ maxHeight: 200, overflowY: "auto" }}
                    >
                      {genres
                        .filter(
                          (g) =>
                            g.toLowerCase().includes(searchGenre.toLowerCase()) &&
                            !selectedGenres.includes(g)
                        )
                        .map((g) => (
                          <li
                            key={g}
                            className="list-group-item list-group-item-action"
                            onClick={() => {
                              setSelectedGenres([...selectedGenres, g]);
                              setSearchGenre("");
                            }}
                            style={{ cursor: "pointer" }}
                          >
                            {g}
                          </li>
                        ))}
                    </ul>
                  )}
                </div>
              )}
              <small className="text-muted">Escolha um ou mais gêneros.</small>
            </div>

            <div className="row">
              {/* Avaliação da API */}
              <div className="col-6 mt-2">
                <label htmlFor="rating" className="form-label">
                  Avaliação TMDB
                </label>
                {selectedSeries && (
                  <p className="fs-5 mb-0">
                    ⭐ {selectedSeries.vote_average?.toFixed(1) || "N/A"}
                  </p>
                )}
              </div>

              {/* Avaliação do usuário */}
              <div className="col-6 mt-2">
                <label htmlFor="rating" className="form-label mb-4">
                  Sua Avaliação
                </label>
                <RatingStars rating={userRating} setRating={setUserRating} />
              </div>
            </div>

            {/* Opinião */}
            <div className="mb-2">
              <label htmlFor="description" className="form-label">
                Opinião
              </label>
              <textarea className="form-control" id="description" rows={8}></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              Adicionar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
