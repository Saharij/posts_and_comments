import { Card, CardContent, Typography, List, ListItem } from "@mui/material";
import React, { useEffect, useState } from "react";

import { Post, Comment } from "../../dataTypes";
import { createPostComment } from "../../api/api";
import { onCreatedComment } from "../../redux/store";
import { CreateNewComment } from "../Forms/CreateNewComment";
import { useDispatch } from "react-redux";

type PostDetails = {
  comments: Comment[] | any;
  post: Post | any;
}

export const PostDetails: React.FC<PostDetails> = ({ comments, post}) => {
  const dispatch = useDispatch();
  const [commentBody, setCommentBody] = useState<string>('');

  useEffect(() => {
    setCommentBody('');
  }, [post.id])

  const inputChange = (e: string) => {
    setCommentBody(e)
  };

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();

    createPostComment({
      postId: post.id,
      body: commentBody,
    })
      .then(result => {
        dispatch(onCreatedComment(result));
        setCommentBody('');
      })
  };

  return (
    <>
      <Card sx={{ maxWidth: 600, marginTop: 2 }}>
        <CardContent>
        <Typography>
            Post: {post.id}
          </Typography>
          <Typography variant="h5">
            {post.title}
          </Typography>
          <Typography>
            {post.body}
          </Typography>

          <Typography variant="h5">
            Comments
          </Typography>
          <List>
            {comments.map((item: Comment) => (
              <ListItem key={item.id}>
                {item.body}
              </ListItem>
            ))}
          </List>
          <CreateNewComment
            inputValue={commentBody}
            inputChange={inputChange}
            submitForm={submitForm}
          />
        </CardContent>
      </Card>
    </>
  );
};
