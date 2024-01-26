import React from "react";
import { Icon } from "@iconify/react";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import {
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalBody,
  MDBModalHeader,
} from "mdb-react-ui-kit";
import { useFormik } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import { addcategory } from "../services/category.services";
import { useUserMutate } from "../hooks/useUserQuery";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required!"),
});

const initialValues = {
  name: "",
};

function Table({ options, data, headers }) {
  const location = useLocation();
  const [centredModal, setCentredModal] = useState(false);
  const [addModal, setAddModal] = useState(false);

  const toggleOpen = () => setCentredModal(!centredModal);
  const toggleAddModal = () => setAddModal(!addModal);

  const { mutate } = useUserMutate(addcategory);
  const handleSubmit = (values, actions) => {
    mutate(values);
    toast.success("Added successfully!");
    toggleAddModal();
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: handleSubmit,
  });
  return (
    <div className="p-3 d-flex flex-column justify-content-center align-items-center">
      <div className={`w-100 d-flex justify-content-between`}>
        <div>
          {options.isCategoryForm && (
            <button className="btn btn-primary" onClick={toggleAddModal}>
              Add
            </button>
          )}
        </div>
        <div>
          Total : <b>20</b>
        </div>
      </div>
      <table className="table table-hover table-borderless p-3 ms-4">
        <thead>
          <tr>
            {headers.map((header, index) => {
              return (
                <th scope="col" key={index}>
                  {header}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {data && data.map((item) => {
            return (
              <tr>
                <td>{item.name}</td>
                {options && (
                  <td className="d-flex justify-content-end align-items-end">
                    <button
                      className="btn btn-sm btn-light"
                      onClick={toggleOpen}
                    >
                      <Icon icon={"mdi:pencil"} fontSize={25} color="gray" />
                    </button>
                  </td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
      {location.pathname !== "/admin" && (
        <div className="d-flex w-100 justify-content-between">
          <button className="btn btn-sm btn-primary w-25">Previous</button>
          <button className="btn btn-sm btn-primary w-25">Next</button>
        </div>
      )}
      {options && (
        <MDBModal tabIndex="-1" open={centredModal} setOpen={setCentredModal}>
          <MDBModalDialog centered>
            <MDBModalContent>
              <MDBModalBody>
                <div className="d-flex flex-column justify-content-center align-items-center gap-3">
                  <button
                    className={`btn btn-md w-50 ${options.firstBtnColor}`}
                  >
                    {options.firstBtnName}
                  </button>
                  <button
                    className={`btn btn-md w-50 ${options.secondBtnColor}`}
                  >
                    {options.secondBtnName}
                  </button>
                  <button
                    className="btn btn-outline-secondary btn-md w-50"
                    onClick={toggleOpen}
                  >
                    Cancel
                  </button>
                </div>
              </MDBModalBody>
            </MDBModalContent>
          </MDBModalDialog>
        </MDBModal>
      )}
      <MDBModal tabIndex="-1" open={addModal} setOpen={setAddModal}>
        <MDBModalDialog centered>
          <MDBModalContent>
            <MDBModalHeader>Add Category</MDBModalHeader>
            <MDBModalBody>
              <form onSubmit={formik.handleSubmit}>
                <div className="d-flex flex-column gap-2">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="category name"
                    id="name"
                    name="name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                  />
                  {formik.touched.name && formik.errors.name && (
                    <div className="text-danger">{formik.errors.name}</div>
                  )}
                  <button className="btn btn-primary" type="submit">
                    Add
                  </button>
                </div>
              </form>
            </MDBModalBody>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </div>
  );
}

export default Table;
