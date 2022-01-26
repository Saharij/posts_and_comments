import { useDispatch } from "react-redux";
import React, { useState, ChangeEvent } from "react";
import { FormGroup, CardActions, Button, TextField } from "@mui/material";

import { editPost } from "../../../api";
import { Post } from "../../../dataTypes";
import { onEditPost } from "../../../redux/store";

type EditPostProps = {
  postItem: Post;
  onModeChange: () => void;
};

export const EditPost: React.FC<EditPostProps> = ({ postItem, onModeChange }) => {
  const dispatch = useDispatch();
  const [post, setPostItem] = useState(postItem);

  const isSubmitDisabled = !post.title || !post.body
    || (post.title === postItem.title && post.body === postItem.body);

  const submitChangesForm = (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmitDisabled) return;

    editPost(post.id, {
      body: post.body,
      title: post.title,
    })
      .then(result => {
        dispatch(onEditPost(result));
        onModeChange();
      });
  };

  const inputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPostItem(state => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form onSubmit={submitChangesForm}>
      <FormGroup>
        <TextField
          size="small"
          value={post.title}
          name="title"
          onChange={inputChange}
          placeholder="Write a title for your post"
          sx={{ marginBottom: 2 }}
        />
        <TextField
          size="small"
          value={post.body}
          name="body"
          onChange={inputChange}
          placeholder="Write a content for your post"
        />
        <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
          <Button onClick={onModeChange}>
            Cancel editing
          </Button>
          <Button type="submit" disabled={isSubmitDisabled}>
            Save changes
          </Button>
        </CardActions>
      </FormGroup>
    </form>
  );
};
