import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, CardContent, Typography, List, ListItem } from "@mui/material";

import { Comment } from "../../dataTypes";
import { createPostComment } from "../../api/api";
import { onCreatedComment, fetchPost, postSelector } from "../../redux/store";
import { CreateNewComment } from "../Forms/CreateNewComment";


type PostDetails = {
  postId: number;
}

export const PostDetails: React.FC<PostDetails> = ({ postId }) => {
  const dispatch = useDispatch();
  const activePost = useSelector(postSelector);
  const [commentBody, setCommentBody] = useState<string>('');
  const isSubmitDisabled = !commentBody;

  useEffect(() => {
    dispatch(fetchPost(postId));
    setCommentBody('');
  }, [postId, dispatch]);

  const inputChange = (e: string) => {
    setCommentBody(e);
  };

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmitDisabled) return;

    createPostComment({
      postId: postId,
      body: commentBody,
    })
      .then(result => {
        dispatch(onCreatedComment(result));
        setCommentBody('');
      });
  };

  return (
    <>
      {activePost && (
        <Card sx={{ maxWidth: 600, marginTop: 2, marginBottom: 2 }}>
         <CardContent>
         <Typography>
             Post {activePost.id}
           </Typography>
           <Typography variant="h5">
             {activePost.title}
           </Typography>
           <Typography>
             {activePost.body}
           </Typography>

           <Typography variant="h5">
             Comments
           </Typography>
           <List>
             {activePost.comments.map((item: Comment) => (
               <ListItem key={item.id}>
                 {item.body}
               </ListItem>
             ))}
           </List>
           <CreateNewComment
             inputValue={commentBody}
             isDisabled={isSubmitDisabled}
             inputChange={inputChange}
             submitForm={submitForm}
           />
         </CardContent>
        </Card>
      )}
    </>
  );
};
