import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

function Write() {
  const navigate = useNavigate();
  const titleRef = useRef();
  const authorRef = useRef();
  const reviewRef = useRef();
  const nameRef = useRef();
  function saveReview() {
    fetch(
      `https://apex.oracle.com/pls/apex/rupinika/novel/post?title=${titleRef.current.value}&author=${authorRef.current.value}&review=${reviewRef.current.value}&name=${nameRef.current.value}`,
      { method: "POST" }
    );
    navigate("/Cards");
  }
  return (
    <>
      <div className="container bg-info p-3 mt-4 rounded-4">
        <div className="form-floating  mb-3 mt-4 ">
          <input
            ref={titleRef}
            type="text"
            className="form-control"
            id="floatingTitle"
            placeholder="Title"
          />
          <label htmlFor="floatingTitle">Title</label>
        </div>
        <div className="form-floating mb-3">
          <input
            ref={authorRef}
            type="text"
            className="form-control"
            id="floatingAutor"
            placeholder="Author"
          />
          <label htmlFor="floatingPassword">Author</label>
        </div>

        <div className="form-floating mb-3">
          <textarea
            ref={reviewRef}
            className="form-control"
            placeholder="Leave a review here"
            id="floatingTextarea2"
            style={{ height: 100 }}
            defaultValue={""}
          />
          <label htmlFor="floatingTextarea2">Review</label>
        </div>
        <div className="form-floating mb-3">
          <input
            ref={nameRef}
            type="text"
            className="form-control"
            id="floatingName"
            placeholder="Your Name"
          />
          <label htmlFor="floatingName">Your Name</label>
        </div>
        <div className="text-center">
          <button
            onClick={saveReview}
            type="button"
            className="btn btn-outline-primary btn-lg "
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
}

export default Write;
