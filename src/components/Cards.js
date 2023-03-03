import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Cards() {
  const [information, setInformation] = useState([]);
  const navigate = useNavigate();
  async function getInfo() {
    let information = await fetch(
      "https://apex.oracle.com/pls/apex/rupinika/novel/get"
    );
    let convertedInformation = await information.json();
    console.log(convertedInformation.items);
    setInformation(convertedInformation.items);
  }
  useEffect(() => {
    getInfo();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          {information.map((element, index) => {
            return (
              <div className="col-lg-4 col-md-6 mt-4">
                <div
                  onClick={() => {
                    localStorage.setItem("title", element.title);
                    localStorage.setItem("author", element.author);
                    localStorage.setItem("review", element.review);
                    navigate("/Review");
                  }}
                  className="card text-bg-info mb-3"
                  style={{ cursor: "pointer" }}
                >
                  <div className="card-header">Review</div>
                  <div className="card-body">
                    <h5 className="card-title">{element.title}</h5>
                    <p className="card-text">By:{element.author}</p>
                    <p className="card-text m-0 p-0">-{element.name}</p>
                    {/* <button
                     
                      className="btn btn-primary"
                    >
                      Reviews
                    </button> */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Cards;
