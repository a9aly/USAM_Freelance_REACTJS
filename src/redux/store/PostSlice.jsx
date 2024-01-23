import { createSlice } from "@reduxjs/toolkit";
import * as data from "../../db.json";
const postSlice = createSlice({
  name: "post",
  initialState: {
    jobs: data.job,
    no_project_management: 0,
    no_design: 0,
    no_development: 0,
    no_marketing: 0,
  },
  reducers: {
    increment: (state, action) => {
        
    },
  },
});

export default postSlice.reducer;
