import { Card, CardActions, CardContent, Button } from "@mui/material";
import React, { useState, useCallback, Dispatch, SetStateAction } from "react";

import { Post } from "../../dataTypes";
import { EditPost } from "./components/EditPost";
import { PostContent } from "./components/PostContent";

type PostItemProps = {
  selectPost: Dispatch<SetStateAction<number | null>>;
  removePost: (id: number) => void;
  postItem: Post;
};

export const PostItem: React.FC<PostItemProps> = ({ selectPost, removePost, postItem }) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const changeMode = useCallback(() => {
    setIsEditing(prevState => !prevState);
  }, []);

  return (
    <Card sx={{ width: 600 }}>
      <CardContent>
        {isEditing ? (
          <EditPost
            postItem={postItem}
            onModeChange={changeMode}
          />
        ) : (
            <PostContent
              id={postItem.id}
              body={postItem.body}
              title={postItem.title}
            />
        )}
      </CardContent>
      {!isEditing && (
        <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
          <Button onClick={() => {
            selectPost(postItem.id);
          }}>
            Open post details
          </Button>
          <Button
            onClick={changeMode}
          >
            Edit post
          </Button>
          <Button onClick={() => {
              removePost(postItem.id);
            }}
          >
            Delete post
          </Button>
        </CardActions>
      )}
    </Card>
  );
};
