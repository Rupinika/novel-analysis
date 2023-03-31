import React, { useState } from "react";
import { Link } from "react-router-dom";

function Review() {
  const [information, setInformation] = useState([]);
  async function getReview() {
    let information = await fetch(
      "https://apex.oracle.com/pls/apex/rupinika/novel/get"
    );
    let convertedInformation = await information.json();
    console.log(convertedInformation.items);
    setInformation(convertedInformation.items);
  }
  return (
    <>
      <div className="container bg-info rounded-3 mt-4 p-3 w-50 text-center">
        <div className="row">
          <div className="col">
            <h1>{localStorage.getItem("title")}</h1>
            <h3>{localStorage.getItem("author")}</h3>
            <p>{localStorage.getItem("review")}</p>
            <Link
              type="button"
              to="/"
              className="btn btn-outline-primary "
            >
              Go back
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Review;
