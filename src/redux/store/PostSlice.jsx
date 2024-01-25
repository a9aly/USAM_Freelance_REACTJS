import { createSlice } from "@reduxjs/toolkit";
import * as data from "../../db.json";
const postSlice = createSlice({
  name: "post",
  initialState: {
    categories: data.categories,
    jobs: data.job,
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
