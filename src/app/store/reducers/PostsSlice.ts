import { createSlice } from "@reduxjs/toolkit";

import Ipost from "../../../shared/interfaces/Iposts";

interface PostState {
  posts: Ipost[];
  isLoading: boolean;
  error: string;
}

const initialState: PostState = {
  posts: [],
  isLoading: false,
  error: "",
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
});

export default postsSlice.reducer;
