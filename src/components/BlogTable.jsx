import React from "react";
import { useLocation } from "react-router-dom";

function BlogTable({ data }) {
  const location = useLocation();
  console.log(data && data.blogs);
  return (
    <div className="p-3 d-flex flex-column justify-content-center align-items-center">
      <div className={`w-100 d-flex justify-content-between`}>
        <div></div>
        <div>
          Total : <b>{data && data.totalCount}</b>
        </div>
      </div>
      <table className="table table-hover table-borderless p-3 ms-4">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Categories</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.blogs.map((item) => {
              return (
                <tr>
                  <td>{item.title}</td>
                  <td>
                    <div className="w-100 d-flex flex-wrap gap-1">
                      {item.categoryList.map((category) => {
                        return (
                          <div className="badge bg-primary text-white">
                            {category.name}
                          </div>
                        );
                      })}
                    </div>
                  </td>
                  <td>{item.status}</td>
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
    </div>
  );
}

export default BlogTable;
