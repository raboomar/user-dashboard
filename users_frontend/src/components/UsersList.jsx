import React from "react";
import { Space, Table, Tag, Button, Popconfirm } from "antd";
const { Column, ColumnGroup } = Table;
const data = [
  {
    key: "1",
    name: "Mike",
    age: 32,
    address: "10 Downing Street",
  },
  {
    key: "2",
    name: "John",
    age: 42,
    address: "10 Downing Street",
  },
];
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
  return <Table dataSource={data} columns={columns} />;
};

export default UsersList;
