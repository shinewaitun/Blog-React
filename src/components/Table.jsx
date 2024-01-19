import React from "react";
import { Icon } from "@iconify/react";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import {
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalBody,
} from "mdb-react-ui-kit";

function Table({ options }) {
  const location = useLocation();
  const [centredModal, setCentredModal] = useState(false);

  const toggleOpen = () => setCentredModal(!centredModal);
  return (
    <div className="p-3 d-flex flex-column justify-content-center align-items-center">
      <div className="align-self-end">
        Total : <b>20</b>
      </div>
      <table class="table table-hover table-borderless p-3 ms-4">
        <thead>
          <tr>
            <th scope="col">User</th>
            <th scope="col">Date In</th>
            <th scope="col">Category</th>
            <th scope="col">Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            {options && (
              <td className="d-flex justify-content-end align-items-end">
                <button className="btn btn-sm btn-light" onClick={toggleOpen}>
                  <Icon icon={"mdi:pencil"} fontSize={25} color="gray" />
                </button>
              </td>
            )}
          </tr>
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
    </div>
  );
}

export default Table;
