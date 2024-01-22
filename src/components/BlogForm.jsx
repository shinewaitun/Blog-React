import React from "react";

function BlogForm({ form }) {
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
          <button
            type="button"
            className="form-control btn btn-outline-secondary py-2"
            aria-describedby="imageLabel"
          >
            Add
          </button>
        </div>
        <div className="d-flex flex-column justify-content-center w-100 gap-2">
          <div className="d-flex flex-column gap-1 w-75 h-auto mx-auto">
            <button className="btn btn-danger align-self-end">Remove</button>
            <img
              src="https://media.istockphoto.com/id/1304289911/photo/my-vision-of-female-face.jpg?s=612x612&w=0&k=20&c=PqJ9iL628RILnaVYcCWSFqLj4IxVR7826Lt9t8FknOo="
              alt="art"
            />
          </div>
          <div className="d-flex flex-column gap-1 w-75 h-auto mx-auto">
            <button className="btn btn-danger align-self-end">Remove</button>
            <img
              src="https://media.istockphoto.com/id/1304289911/photo/my-vision-of-female-face.jpg?s=612x612&w=0&k=20&c=PqJ9iL628RILnaVYcCWSFqLj4IxVR7826Lt9t8FknOo="
              alt="art"
            />
          </div>
          <div className="d-flex flex-column gap-1 w-75 h-auto mx-auto">
            <button className="btn btn-danger align-self-end">Remove</button>
            <img
              src="https://media.istockphoto.com/id/1304289911/photo/my-vision-of-female-face.jpg?s=612x612&w=0&k=20&c=PqJ9iL628RILnaVYcCWSFqLj4IxVR7826Lt9t8FknOo="
              alt="art"
            />
          </div>
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
          <select class="form-control py-2 w-100" aria-describedby="titleLabel">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
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
          <button className={`btn w-100 ${form.btnColor}`}>{form.type}</button>
        </div>
      </div>
    </form>
  );
}

export default BlogForm;
