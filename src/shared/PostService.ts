import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Ipost from "./interfaces/Iposts";

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (build) => ({
    fetchAllPosts: build.query<Ipost[], number>({
      query: (page: number = 1, limit: number = 10) => ({
        url: "/posts",
        params: { _limit: limit, _page: page },
      }),
    }),
    fetchOnePost: build.query<Ipost, number>({
      query: (postId: number) => ({
        url: `/posts/${postId}`,
      }),
    }),
  }),
});
