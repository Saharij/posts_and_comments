import { useEffect, useCallback, Dispatch, SetStateAction } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Post } from "../../dataTypes";
import { List, ListItem } from "@mui/material";
import { PostItem } from "../PostItem/index";
import { deletePost } from "../../api/api";
import { postsFromStore, fetchPosts, onRemovePost } from "../../redux/store";

type PostsList = {
  onPostSelect: Dispatch<SetStateAction<number | null>>;
}

export const PostsList: React.FC<PostsList> = ({ onPostSelect }) => {
  const dispatch = useDispatch();
  const posts = useSelector(postsFromStore);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const onPostRemove = useCallback((id: number) => {
    deletePost(id)
      .then(() => {
        dispatch(onRemovePost(id));
      });
  }, [dispatch]);

  return (
    <List>
      {posts.map((item: Post) => (
        <ListItem key={item.id}>
          <PostItem
            selectPost={onPostSelect}
            removePost={onPostRemove}
            postItem={item}
          />
        </ListItem>
      ))}
    </List>
  );
};
