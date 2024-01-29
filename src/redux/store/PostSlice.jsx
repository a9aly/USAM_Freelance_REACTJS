import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import * as data from "../../db.json";
import axios from "axios";

export const postJob = createAsyncThunk("postJob", async (postContent) => {
  const request = await axios.post("http://localhost:3000/job", postContent);
  const response = await request.data.data;
  return response;
});

const postSlice = createSlice({
  name: "post",
  initialState: {
    categories: data.categories,
    jobs: data.job,
    talent_category: data.talent_category,
    no_project_management: 0,
    no_design: 0,
    no_development: 0,
    no_marketing: 0,
  },
  reducers: {
    incrementCategory: (state, action) => {
      state.categories.map((category) =>
        category.name == action.payload
          ? category.no_posts + 1
          : category.no_posts
      );
    },
  },
});

export const { incrementCategory } = postSlice.actions;
export default postSlice.reducer;
