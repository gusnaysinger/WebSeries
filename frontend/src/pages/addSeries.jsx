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

  const genres = [
    "Ação",
    "Aventura",
    "Comédia",
    "Drama",
    "Fantasia",
    "Ficção Científica",
    "Romance",
    "Suspense",
    "Terror",
    "Animação",
    "Documentário",
    "Policial",
    "Mistério",
    "Musical",
    "Histórico",
  ];

  // Atualiza texto e busca sugestões
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

  // Clique em sugestão
  // const handleSuggestionClick = (serie) => {
  //   setQuery(serie.name);
  //   setSuggestions([]);
  //   fetchSeriesDetails(serie.id);
  // };

  // Preview imagem manual
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  // Alterna seleção de gênero manual
  const handleGenreChange = (e) => {
    const value = e.target.value;
    setSelectedGenres((prev) =>
      prev.includes(value) ? prev.filter((g) => g !== value) : [...prev, value]
    );
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
              ) : (
                <span>Preview da Imagem</span>
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
              <label className="form-label">Gêneros</label>

              {selectedSeries && selectedSeries.genres?.length > 0 ? (
                // Mostra somente os gêneros vindos da API
                <div className="p-2 border rounded">
                  {selectedGenres.join(", ")}
                </div>
              ) : (
                // Caso a API não traga gêneros, mostra o dropdown manual
                <div className="dropdown">
                  <button
                    className="btn btn-outline-secondary dropdown-toggle w-100 text-start"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {selectedGenres.length > 0
                      ? selectedGenres.join(", ")
                      : "Selecione os gêneros"}
                  </button>
                  <ul
                    className="dropdown-menu w-100"
                    style={{ maxHeight: 250, overflowY: "auto" }}
                  >
                    {genres.map((genre) => (
                      <li key={genre}>
                        <label className="dropdown-item">
                          <input
                            type="checkbox"
                            value={genre}
                            checked={selectedGenres.includes(genre)}
                            onChange={handleGenreChange}
                            className="form-check-input me-2"
                          />
                          {genre}
                        </label>
                      </li>
                    ))}
                  </ul>
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
              <textarea className="form-control" id="description"></textarea>
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
