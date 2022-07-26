import axios from "axios";
const url = "http://localhost:8080/";

export const getAllUsers = async () => {
  try {
    return axios.get(url);
  } catch (error) {
    console.log(error);
  }
};

export const addNewUser = async (user) => {
  try {
    let data = JSON.stringify(user);
    let config = {
      method: "post",
      url: url,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    await axios(config);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const deleteUser = async (id) => {
  try {
    axios.delete(`${url}${id}`);
  } catch (error) {
    console.log(error);
  }
};
