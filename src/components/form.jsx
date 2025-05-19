import React, { useState } from "react";
import { useAddPostMutation } from "../redux/features/post/postEndpoints";

const PostForm = () => {
  const [formState, setFormState] = useState({
    title: "",
    body: "",
    userId: 1,
  });

  const [addItem, { isLoading, isError }] = useAddPostMutation();

  const handleSubmit = async () => {
    console.log(formState);

    await addItem(formState);
  };

  return (
    <div>
      <input placeholder="title" onChange={(e) => setFormState((ps) => ({ ...ps, title: e.target.value }))} />
      <input placeholder="body" onChange={(e) => setFormState((ps) => ({ ...ps, body: e.target.value }))} />

      <button onClick={handleSubmit}>submit</button>
    </div>
  );
};

export default PostForm;
