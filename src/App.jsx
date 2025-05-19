import { useEffect } from "react";
import "./App.css";
import PostForm from "./components/form";
import { useDeletePostMutation, useGetPostsQuery } from "./redux/features/post/postEndpoints";
import CounterComponent from "./components/counter";

function App() {
  const { data, isError, error, isLoading, isSuccess, refetch } = useGetPostsQuery({ page: 1, limit: 15 });

  const [deletePost, { isSuccess: delSuccess, isLoading: delLoa }] = useDeletePostMutation();

  if (data) {
  }

  const handleDelete = async () => {
    await deletePost(12);
    alert("Post deleted!");
  };

  console.log(delSuccess, delLoa);

  return (
    <>
      <h1>app component</h1>

      <button onClick={handleDelete}>delete</button>

      <PostForm />

      <CounterComponent />
    </>
  );
}

export default App;
