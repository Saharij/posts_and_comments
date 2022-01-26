import { useDispatch } from "react-redux";
import { Card, CardActions, CardContent, Button } from "@mui/material";
import React, { useState, ChangeEvent, Dispatch, SetStateAction } from "react";

import { Post } from "../../dataTypes";
import { editPost } from "../../api/api";
import { onEditPost } from "../../redux/store";
import { EditPost } from "./components/EditPost";
import { PostContent } from "./components/PostContent";

type PostItemProps = {
  selectPost: Dispatch<SetStateAction<number | null>>;
  removePost: (id: number) => void;
  postItem: Post;
}

export const PostItem: React.FC<PostItemProps> = ({ selectPost, removePost, postItem }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [post, setPostItem] = useState(postItem);

  const isSubmitDisabled = !post.title || !post.body
    || (post.title === postItem.title && post.body === postItem.body);

  const changeMode = () => {
    setIsEditing(!isEditing);
  };

  const submitChangesForm = (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmitDisabled) return;

    editPost(post.id, {
      body: post.body,
      title: post.title,
    })
      .then(result => {
        dispatch(onEditPost(result));
      });

      setIsEditing(false);
  };

  const inputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPostItem(state => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Card sx={{ width: 600 }}>
      <CardContent>
        {isEditing ? (
          <EditPost
            title={post.title}
            body={post.body}
            isDisabled={isSubmitDisabled}
            handleClick={changeMode}
            submitChangesForm={submitChangesForm}
            inputChange={inputChange}
          />
        ) : (
            <PostContent
              id={post.id}
              body={post.body}
              title={post.title}
            />
        )}
      </CardContent>
      {!isEditing && (
        <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
          <Button onClick={() => {
            selectPost(post.id);
          }}>
            Open post details
          </Button>
          <Button
            onClick={changeMode}
          >
            Edit post
          </Button>
          <Button onClick={() => {
              removePost(post.id);
            }}
          >
            Delete post
          </Button>
        </CardActions>
      )}
    </Card>
  );
};
