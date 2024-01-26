import React from "react";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

function UpdateBlogForm() {
  return (
    <form className="w-100 d-flex justify-content-center gap-5 mb-5 mt-2 px-5">
      <div className="d-flex flex-column justify-content-start align-items-start gap-3 w-50">
        <div className="form-group w-100">
          <small id="titleLabel" className="form-text text-muted">
            Title
          </small>
          <input
            type="text"
            className="form-control py-2 w-100"
            aria-describedby="titleLabel"
          />
        </div>
        <div className="form-group w-100">
          <small id="imageLabel" className="form-text text-muted">
            Images
          </small>
        </div>
      </div>
      <div className="d-flex flex-column justify-content-start align-items-start gap-3 w-50">
        <div className="form-group w-100">
          <small id="titleLabel" className="form-text text-muted">
            Content
          </small>
          <input
            type="text"
            className="form-control py-2 w-100 h-auto"
            aria-describedby="titleLabel"
          />
        </div>
        <div className="form-group w-100">
          <small id="titleLabel" className="form-text text-muted">
            Category
          </small>
          <div aria-describedby="titleLabel"></div>
        </div>
        <div className="form-group w-100">
          <small id="titleLabel" className="form-text text-muted">
            Description
          </small>
          <textarea
            class="form-control py-2 w-100"
            aria-describedby="titleLabel"
            rows={10}
            style={{ resize: "none" }}
          />
        </div>
        <div className="form-group w-100">
          <button className={`btn w-100 btn-warning text-white`}>Update</button>
        </div>
      </div>
    </form>
  );
}

export default UpdateBlogForm;
