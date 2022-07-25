import React from "react";
import { Space, Table, Tag, Button, Popconfirm } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getUsers } from "../redux/userSlice";
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
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const renderTable = () => {
    if (users.length === 0) return <div>loadding....</div>;
    else {
      return <Table dataSource={data} columns={columns} />;
    }
  };
  return <div> {renderTable()}</div>;
};

export default UsersList;
