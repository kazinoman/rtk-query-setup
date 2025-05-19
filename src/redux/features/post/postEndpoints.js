import { baseApi } from "../baseApi/baseApi";

export const postsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getPosts: build.query({
      query: ({ page = 1, limit = 10 }) => ({
        url: `/posts?_start=${page}&_limit=${limit}`,
        method: "GET",
      }),

      providesTags: (result) => [{ type: "Post", id: "LIST" }],
    }),

    addPost: build.mutation({
      query: (id, body) => {
        return {
          url: "/posts",
          method: "POST",
          body,
        };
      },

      invalidatesTags: [{ type: "Post", id: "LIST" }],
    }),

    // DELETE mutation
    deletePost: build.mutation({
      query: (postId) => ({
        url: `/posts/${postId}`,
        method: "DELETE",
      }),

      // Invalidate the specific deleted post and the list so UI refreshes
      invalidatesTags: (result, error, postId) => [
        { type: "Post", id: postId },
        { type: "Post", id: "LIST" },
      ],
    }),
  }),

  overrideExisting: false,
});

export const { useGetPostsQuery, useAddPostMutation, useDeletePostMutation } = postsApi;
