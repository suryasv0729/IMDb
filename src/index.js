import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import StarRating from "./StarRating";
import App2 from "./App-v2";
function Test() {
  const [movieRating, setMovieRating] = useState(0);

  return (
    <div>
      <StarRating
        maxRating={7}
        color="blue"
        messages={["poor", "bad", "good", "nice", "amazing"]}
        getMovieRating={setMovieRating}
      />
      <p>this movie was rated {movieRating} stars</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <StarRating
      maxRating={5}
      messages={["poor", "bad", "good", "nice", "amazing"]}
    />
    <StarRating maxRating={9} size={48} color={"red"} defaultRating={5} />
    <Test /> */}
    <App2 />
  </React.StrictMode>
);
