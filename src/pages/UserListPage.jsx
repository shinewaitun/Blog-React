import Table from "../components/CategoryTable";
import AdminNav from "../layouts/AdminNav";

const modalOptions = {
  firstBtnColor: "btn-success",
  firstBtnName: "Active",
  secondBtnColor: "btn-danger",
  secondBtnName: "Inactive",
};

function UserListPage() {
  return (
    <div>
      <AdminNav title={"User List"} />
      <Table options={modalOptions} />
    </div>
  );
}

export default UserListPage;
