import React from "react";
import { useNavigate } from "react-router-dom";

function BlogInfo() {
  const navigate = useNavigate();
  return (
    <div className="w-100 p-5 d-flex flex-column">
      <div className="w-100 d-flex p-5 gap-5">
        <div className="w-50 d-flex flex-column gap-3">
          <div className="d-flex">
            <div className="w-50 align-items-start">
              <h5>Title</h5>
            </div>
            <div className="w-50 align-items-start">
              <h5>This is a blog</h5>
            </div>
          </div>
          <div className="d-flex">
            <div className="w-50 align-items-start">
              <h5>Category</h5>
            </div>
            <div className="w-50 d-flex flex-column align-items-start">
              <h5>IT</h5>
              <h5>React</h5>
              <h5>HI</h5>
            </div>
          </div>
          <div className="d-flex flex-column gap-3 justify-content-end">
            <button
              onClick={() => {
                navigate("/user/update_blog");
              }}
              className="btn btn-warning text-white"
            >
              Update
            </button>
            <button className="btn btn-danger">Delete</button>
          </div>
        </div>
        <div className="w-50 d-flex flex-column gap-3">
          <div className="d-flex">
            <div className="w-50 align-items-start">
              <h5>Content</h5>
            </div>
            <div className="w-50 align-items-start">
              <h5>Why is why</h5>
            </div>
          </div>
          <div className="d-flex flex-column gap-2">
            <div className="w-100 align-items-start">
              <h5>Description</h5>
            </div>
            <div className="w-100 align-items-start">
              <textarea
                className="w-100 form-control"
                style={{ resize: "none" }}
                rows={7}
                readOnly={true}
                value={"This is a blog posted by a blog user from blog website"}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-100 d-flex flex-wrap p-2 border-top border-black border-2">
        <div className="d-flex flex-column gap-1 w-50 h-auto mx-auto p-5">
          <img
            src="https://media.istockphoto.com/id/1304289911/photo/my-vision-of-female-face.jpg?s=612x612&w=0&k=20&c=PqJ9iL628RILnaVYcCWSFqLj4IxVR7826Lt9t8FknOo="
            alt="art"
          />
        </div>
        <div className="d-flex flex-column gap-1 w-50 h-auto mx-auto p-5">
          <img
            src="https://media.istockphoto.com/id/1304289911/photo/my-vision-of-female-face.jpg?s=612x612&w=0&k=20&c=PqJ9iL628RILnaVYcCWSFqLj4IxVR7826Lt9t8FknOo="
            alt="art"
          />
        </div>
        <div className="d-flex flex-column gap-1 w-50 h-auto mx-auto p-5">
          <img
            src="https://media.istockphoto.com/id/1304289911/photo/my-vision-of-female-face.jpg?s=612x612&w=0&k=20&c=PqJ9iL628RILnaVYcCWSFqLj4IxVR7826Lt9t8FknOo="
            alt="art"
          />
        </div>
        <div className="d-flex flex-column gap-1 w-50 h-auto mx-auto p-5">
          <img
            src="https://media.istockphoto.com/id/1304289911/photo/my-vision-of-female-face.jpg?s=612x612&w=0&k=20&c=PqJ9iL628RILnaVYcCWSFqLj4IxVR7826Lt9t8FknOo="
            alt="art"
          />
        </div>
      </div>
    </div>
  );
}

export default BlogInfo;
