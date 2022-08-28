import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_ADDRESS = 'https://62f81929ab9f1f8e8907fb26.mockapi.io/phonebook';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_ADDRESS }),
  tagTypes: ['Contacts'],
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => '/contacts',
      providesTags: ['Contacts'],
    }),
    addContact: builder.mutation({
      query: ({ id, name, phone }) => ({
        url: `/contacts`,
        method: 'POST',
        body: { id, name, phone },
      }),
      invalidatesTags: ['Contacts'],
    }),
    removeContact: builder.mutation({
      query: id => ({
        url: `/contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useAddContactMutation,
  useRemoveContactMutation,
} = contactsApi;
