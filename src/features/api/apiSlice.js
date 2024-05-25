import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://newsapi.org/v2" }),
  endpoints: (builde) => ({
    getBlogs: builde.query({
      query: ({ Page, pageSize }) =>
        `https://61791a83aa7f3400174047a6.mockapi.io/v1/GetBLogs/`,
      queryKey: (Page) => `news-${Page}`,
    }),
    getSingle: builde.query({
      query: ({ selectedBlogID }) =>
        `https://61791a83aa7f3400174047a6.mockapi.io/v1/GetBLogs/${selectedBlogID}`,
    }),
  }),
});
export const { useGetBlogsQuery, useGetSingleQuery, useAddBlogsMutation } =
  apiSlice;
