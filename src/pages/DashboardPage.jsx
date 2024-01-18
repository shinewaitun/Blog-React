import Table from "../components/Table";
import AdminNav from "../layouts/AdminNav";
import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Legend,
  Label,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Approved", value: 10 },
  { name: "Pending", value: 5 },
  { name: "Rejected", value: 2 },
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

function DashboardPage() {
  return (
    <div>
      <AdminNav title={"Dashboard"} />
      <div className="w-100 d-flex">
        <div className="w-50 d-flex flex-column gap-0 justify-content-center align-items-center position-relative">
          <h5>Blog List</h5>
          <ResponsiveContainer width="80%" height={300}>
            <PieChart>
              <Pie
                data={data}
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
                <Label position={"center"} value={"Total"} dy={-10} />
                <Label position={"center"} value={"17"} dy={10} />
              </Pie>
              <Legend
                verticalAlign="middle"
                align="right"
                iconSize={10}
                iconType="circle"
                layout="vertical"
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="w-50 d-flex flex-column justify-content-start align-items-center gap-4">
          <h5 className="mb-5">Blog Information</h5>
          <div
            className="btn btn-lg w-75"
            style={{ backgroundColor: "blue", color: "white" }}
          >
            10
          </div>
          <div
            className="btn btn-lg w-75"
            style={{ backgroundColor: "yellow", color: "white" }}
          >
            5
          </div>
          <div
            className="btn btn-lg w-75"
            style={{ backgroundColor: "aquamarine", color: "white" }}
          >
            2
          </div>
        </div>
      </div>
      <Table />
    </div>
  );
}

export default DashboardPage;
