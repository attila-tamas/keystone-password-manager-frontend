import { apiSlice } from "@redux/apiSlice";

export const entryApiSlice = apiSlice.injectEndpoints({
	endpoints: builder => ({
		getEntries: builder.query({
			query: ({
				keyword = "",
				page = 1,
				limit = 10,
				sort = "title",
				asc = 1,
			}) => ({
				url: `/key?keyword=${keyword}&page=${page}&limit=${limit}&sort=${sort}&asc=${asc}`,
				method: "GET",
			}),
			providesTags: result => {
				return [
					{ type: "Key", id: "ALL" },
					...result.map((entry: any) => ({
						type: "Key",
						id: entry.id,
					})),
				];
			},
		}),

		updateEntry: builder.mutation({
			query: initialKeyData => ({
				url: "/key/update",
				method: "PATCH",
				body: {
					...initialKeyData,
				},
			}),
			invalidatesTags: (_result, _error, arg) => [
				{ type: "Key", id: arg.id },
			],
		}),

		addNewEntry: builder.mutation({
			query: initialKeyData => ({
				url: "/key/new",
				method: "POST",
				body: {
					...initialKeyData,
				},
			}),
			invalidatesTags: [{ type: "Key", id: "ALL" }],
		}),

		deleteEntry: builder.mutation({
			query: ({ id }) => ({
				url: "/key/delete",
				method: "DELETE",
				body: { id },
			}),
			invalidatesTags: (_result, _error, arg) => [
				{ type: "Key", id: arg.id },
			],
		}),

		deleteAllEntries: builder.mutation({
			query: () => ({
				url: "/key/delete/all",
				method: "DELETE",
			}),
			invalidatesTags: [{ type: "Key", id: "ALL" }],
		}),
	}),
	overrideExisting: false,
});

export const {
	useLazyGetEntriesQuery,
	useUpdateEntryMutation,
	useAddNewEntryMutation,
	useDeleteEntryMutation,
	useDeleteAllEntriesMutation,
} = entryApiSlice;
