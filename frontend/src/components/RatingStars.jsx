import { useState } from "react";

function RatingStars() {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    return (
      <div className="d-flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <i
            key={star}
            className={`fa-star fa-xl me-2 ${
              (hover || rating) >= star
                ? "fa-solid text-warning"
                : "fa-regular text-secondary"
            }`}
            style={{ cursor: "pointer" }}
            onClick={() => setRating(star)} // define avaliação
            onMouseEnter={() => setHover(star)} // mostra hover
            onMouseLeave={() => setHover(0)} // tira hover
          ></i>
        ))}
      </div>
    );
}

export default RatingStars;