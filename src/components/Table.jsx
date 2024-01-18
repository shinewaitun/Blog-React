import React from "react";
import { Icon } from "@iconify/react";

function Table() {
  return (
    <div className="p-3 d-flex justify-content-center align-items-center">
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
            <td className="d-flex gap-3">
              <Icon icon={"mdi:pencil"} fontSize={25} color="gray" />
              <Icon icon={"mdi:trash-can"} fontSize={25} color="yellow" />
            </td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td className="d-flex gap-3">
              <Icon icon={"mdi:pencil"} fontSize={25} color="gray" />
              <Icon icon={"mdi:trash-can"} fontSize={25} color="yellow" />
            </td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td className="d-flex gap-3">
              <Icon icon={"mdi:pencil"} fontSize={25} color="gray" />
              <Icon icon={"mdi:trash-can"} fontSize={25} color="yellow" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;
