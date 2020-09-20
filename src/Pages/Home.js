import React from "react";
import "./Home.css";
import Banner from "../Components/Banner";
import Card from "../Components/Card";
import data from "../DataFile/data";
const Home = () => {
  return (
    <div className="home">
      <Banner />
      <div className="home__section">
        {data.map(({ img, title, desc, price }) => {
          return (
            <Card
              src={img}
              title={title}
              desc={desc}
              price={price}
              key={title}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
