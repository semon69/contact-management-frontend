import { baseApi } from "./baseapi";

export const contactApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addContact: build.mutation({
      query: (data) => ({
        url: "/add",
        method: "POST",
        data,
      }),
      invalidatesTags: ["contact"],
    }),
    getContacts: build.query({
      query: () => ({
        url: "/",
        method: "GET",
      }),
      providesTags: ["contact"],
    }),
    updateContact: build.mutation({
      query: (data) => ({
        url: `/${data.id}`,
        method: "PATCH",
        data: data.payload,
      }),
      invalidatesTags: ["contact"],
    }),
    deleteContact: build.mutation({
      query: (data) => ({
        url: `/${data.id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["contact"],
    }),
  }),
});

export const {
  useAddContactMutation,
  useGetContactsQuery,
  useUpdateContactMutation,
  useDeleteContactMutation,
} = contactApi;
