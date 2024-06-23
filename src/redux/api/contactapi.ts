import { baseApi } from "./baseapi";

export const contactApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addContact: build.mutation({
      query: (data) => ({
        url: "/add",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: data,
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
    getAContact: build.query({
      query: (id) => ({
        url: `/${id}`,
        method: "GET",
      }),
      providesTags: ["contact"],
    }),
    updateContact: build.mutation({
      query: (data) => ({
        url: `/${data.id}`,
        method: "PATCH",
        body: data.payload,
      }),
      invalidatesTags: ["contact"],
    }),
    updateFavouriteStatus: build.mutation({
      query: (data) => {
        console.log("Mutation Data:", data); 
        return {
          url: `/isFavourite/${data.id}`,
          method: "PATCH",
          body: data.payload,
        };
      },
      invalidatesTags: ["contact"],
    }),
    deleteContact: build.mutation({
      query: (id) => ({
        url: `/${id}`,
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
  useGetAContactQuery,
  useUpdateFavouriteStatusMutation,
} = contactApi;
