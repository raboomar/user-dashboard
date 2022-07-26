import React from "react";
import { Table, Button, Popconfirm } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getUsers } from "../redux/userSlice";

const columns = [
  {
    title: "Id",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },

  {
    title: "Gender",
    dataIndex: "gender",
    key: "gender",
  },
  {
    title: "Actions",
    dataIndex: "",
    key: "x",

    render: (student) => (
      <>
        <Popconfirm
          placement="topLeft"
          title={`Do you want to delete ${student.name}`}
          onConfirm={() => console.log("hiii")}
          okText="Yes"
          cancelText="No"
        >
          <Button value="Delete">Delete</Button>
        </Popconfirm>
        <Button value="Edit">Edit</Button>
      </>
    ),
  },
];
const UsersList = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const renderTable = () => {
    if (users.length === 0) return <div>loadding....</div>;
    else {
      return (
        <Table
          dataSource={users}
          columns={columns}
          rowKey={(user) => user.id}
        />
      );
    }
  };
  return <div> {renderTable()}</div>;
};

export default UsersList;
