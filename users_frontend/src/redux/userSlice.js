import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getUsers = createAsyncThunk(
  "getUsers",
  async (dispatch, getState) => {
    return await fetch("http://localhost:8080/").then((res) => res.json());
  }
);

const usersSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    status: null,
  },
  extraReducers: {
    [getUsers.pending]: (state, action) => {
      state.state = "loading";
    },
    [getUsers.fulfilled]: (state, action) => {
      state.state = "success";
      state.users = action.payload;
    },
    [getUsers.rejected]: (state, action) => {
      state.state = "failed";
    },
  },
});
export default usersSlice.reducer;
