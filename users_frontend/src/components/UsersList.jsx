import React from "react";
import { Table, Button, Popconfirm, Empty } from "antd";
// import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
// import { getUsers } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";
import UserForm from "./UserForm";
import { deleteUser, getAllUsers } from "../client/client";
import Loading from "./Loading";
import { success } from "./notification";

const UsersList = () => {
  let navigate = useNavigate();
  const [fetching, setFetching] = useState(true);
  const [showDrawer, setShowDrawer] = useState(false);

  const [allUsers, setAllUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  // const dispatch = useDispatch();
  // const { users } = useSelector((state) => state.users);

  const fetchUsers = () => {
    getAllUsers().then((res) => {
      setAllUsers(res.data);
      setFetching(false);
    });
  };

  const confirm = (user) => {
    deleteUser(user.id).then(() => {
      success("User Removed", `${user.name} has been removed`);
      fetchUsers();
    });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

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

      render: (user) => (
        <>
          <Popconfirm
            placement="topLeft"
            title={`Do you want to delete ${user.name}`}
            onConfirm={() => confirm(user)}
            okText="Yes"
            cancelText="No"
          >
            <Button value="Delete">Delete</Button>
          </Popconfirm>
          <Button
            value="Edit"
            onClick={() => {
              navigate(`/edit/${user.id}`);
              // setVisible(true);
              // setCurrentUser(user);
            }}
          >
            Edit
          </Button>
        </>
      ),
    },
  ];

  const renderTable = () => {
    if (fetching) return <Loading />;
    if (allUsers.length === 0) {
      return (
        <>
          <UserForm
            showDrawer={showDrawer}
            setShowDrawer={setShowDrawer}
            fetchData={fetchUsers}
          />
          <Empty />
        </>
      );
    } else {
      return (
        <>
          <UserForm
            showDrawer={showDrawer}
            setShowDrawer={setShowDrawer}
            fetchData={fetchUsers}
          />
          <Table
            dataSource={allUsers}
            columns={columns}
            rowKey={(user) => user.id}
          />
        </>
      );
    }
  };
  return (
    <div>
      <Button
        onClick={() => setShowDrawer(!showDrawer)}
        size="small"
        style={{ margin: 10, display: "flex" }}
        shape="round"
        type="primary"
      >
        Add User
      </Button>
      {renderTable()}
    </div>
  );
};

export default UsersList;
