import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import { signup } from "../services/user.services";
import { useUserMutate } from "../hooks/useUserQuery";

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required!") ,
  email: Yup.string().required("Email is required!"),
  password: Yup.string().required("Password is required!")
})

export default function SignupPage() {
  const navigate = useNavigate();
  const {mutate,data} = useUserMutate(signup);

  const handleSubmit = (values) => {
    mutate(values);
    // if(data.data.status !== 'success') {
    //   toast.error("Register Failed!")
    // }
    console.log(data);
    toast.success("Registered successfully!");
    navigate("/login");
  }

  const formik = useFormik({
    initialValues:{
      username: '',
      email: '',
      password: ''
    },
    validationSchema: validationSchema,
    onSubmit: handleSubmit
  })

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
        <h1 className="fw-bold">Create a new account</h1>
        <div className="form-control w-75 d-flex flex-row align-items-center text-center justify-content-center p-3 gap-2">
          <img
            style={{ width: "20px", height: "20px" }}
            src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-icon-png-transparent-background-osteopathy-16.png"
            alt="google logo"
          />
          <span>Continue with Google</span>
        </div>
        <div className="d-flex flex-row align-items-center justify-content-center w-75 gap-4">
          <span className="border-top border-1 w-25"></span>
          <span className="text-secondary">or</span>
          <span className="border-top border-1 w-25"></span>
        </div>
        <form className="d-flex flex-column align-content-center justify-content-center gap-3 w-75" onSubmit={formik.handleSubmit}>
          <div className="form-group">
            <input
              className="form-control p-3"
              type="text"
              name="username"
              id="username"
              placeholder="username"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.username}
            />
            {formik.touched.username && formik.errors.username && (
              <div className="text-danger">{formik.errors.username}</div>
            )}
          </div>
          <div className="form-group">
            <input
              className="form-control p-3"
              type="email"
              name="email"
              id="email"
              placeholder="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email && (
              <div className="text-danger">{formik.errors.email}</div>
            )}
          </div>
          <div className="form-group">
            <input
              className="form-control p-3"
              type="password"
              name="password"
              id="password"
              placeholder="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password && (
              <div className="text-danger">{formik.errors.password}</div>
            )}
          </div>
          <div className="d-flex gap-2">
            <button className="btn btn-dark rounded-1 w-50 p-3" type="submit">
              Sign Up
            </button>
            <button
              className="btn btn-light border-black rounded-1 w-50 p-3"
              type="button"
              onClick={() => {
                navigate('/login');
              }}
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
