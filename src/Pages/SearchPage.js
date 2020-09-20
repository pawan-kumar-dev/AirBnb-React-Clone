import React, { useState, useEffect } from "react";
import "./SearchPage.css";
import { Button } from "@material-ui/core";
import SearchResult from "../Components/SearchResult";
import Loader from "react-loader-spinner";
import data from "../DataFile/data";
const SearchPage = () => {
  const [show, setShow] = useState(false);
  const results = data.map(
    ({ img, title, desc, location, star, price, total }) => {
      return (
        <SearchResult
          img={img}
          title={title}
          desc={desc}
          location={location}
          star={star}
          price={price}
          total={total}
          key={title}
        />
      );
    }
  );
  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 5000);
  }, []);
  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <p>62 Stays * 20 September to 30 October *2 Guest</p>
        <h4>Stays Nearby</h4>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of Place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and Beds</Button>
        <Button variant="outlined">More Filter</Button>
      </div>
      {show ? (
        results
      ) : (
        <Loader
          type="Circles"
          color="#ff7779"
          height={100}
          width={100}
          className="loader"
        />
      )}
    </div>
  );
};

export default SearchPage;
