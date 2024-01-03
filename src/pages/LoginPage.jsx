import React from "react";

export default function LoginPage() {
  return (
    <div className="vw-100 vh-100 d-flex flex-column flex-md-row justify-content-center align-items-center">
      <div className="col-12 col-md-6 h-100 d-flex items-center justify-content-center">
        <img
            className="w-100 w-md-auto img-fluid object-fit-cover"
          src="https://images.unsplash.com/photo-1536152470836-b943b246224c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGQlMjBuYXR1cmUlMjB3YWxscGFwZXJ8ZW58MHx8MHx8fDA%3D"
          alt="Image 1"
        />
      </div>
      <div className="col-12 col-md-6 p-5 h-100 d-flex flex-column align-items-center justify-content-center gap-3 ">
        <h1 className="fw-bold">Sign In</h1>
        <div className="form-control w-75 d-flex flex-row align-items-center text-center justify-content-center p-3 gap-2">
            <img style={{width:"20px", height: "20px"}} src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-icon-png-transparent-background-osteopathy-16.png" alt="google logo" />
            <span>Continue with Google</span>
        </div>
        <div className="d-flex flex-row align-items-center justify-content-center w-75 gap-4">
            <span className="border-top border-1 w-25"></span>
            <span className="text-secondary">or</span>
            <span className="border-top border-1 w-25"></span>
        </div>
        <form className="d-flex flex-column align-content-center justify-content-center gap-3 w-75">
          <div className="form-group">
            <input
              className="form-control p-3"
              type="text"
              name="username"
              id="username"
              placeholder="username"
            />
          </div>
          <div className="form-group">
            <input
              className="form-control p-3"
              type="password"
              name="password"
              id="password"
              placeholder="password"
            />
          </div>
          <div className="d-flex gap-2">
            <button className="btn btn-dark rounded-1 w-50 p-3">Sign Up</button>
            <button className="btn btn-light border-black rounded-1 w-50 p-3" type="submit">Sign In</button>
          </div>
        </form>
      </div>
    </div>
  );
}
