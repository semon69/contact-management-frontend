import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://contactmanagementbackend-semon69s-projects.vercel.app/api/contact",
  }),
  endpoints: () => ({}),
  tagTypes: ["contact"],
});
