import React, { useState } from "react";
import "./SearchResult.css";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarIcon from "@material-ui/icons/Star";
import FavoriteIcon from "@material-ui/icons/Favorite";
const SearchResult = ({ img, location, title, desc, star, price, total }) => {
  const [fav, setFav] = useState(false);
  return (
    <div className="searchResult">
      <img src={img} alt="searchimg" />
      {!fav ? (
        <FavoriteBorderIcon
          className="searchResult__heart"
          onClick={() => setFav(!fav)}
        />
      ) : (
        <FavoriteIcon
          className="searchResult__heart2"
          onClick={() => setFav(!fav)}
        />
      )}

      <div className="searchResult__info">
        <div className="searchResult__infoTop">
          <p>{location}</p>
          <h3>{title}</h3>
          <p>____</p>
          <p>{desc}</p>
        </div>
        <div className="searchResult__infoBottom">
          <div className="searchResult__stars">
            <StarIcon className="searchResult__star" />
            <p>
              <strong>{star}</strong>
            </p>
          </div>
          <div className="searchResult__price">
            <h2>{price}</h2>
            <p>{total} Total</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
