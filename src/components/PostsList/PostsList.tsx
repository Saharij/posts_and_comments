import { List, ListItem } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useCallback, Dispatch, SetStateAction } from "react";

import { Post } from "../../dataTypes";
import { deletePost } from "../../api";
import { PostItem } from "../PostItem/index";
import { postsSelector, fetchPosts, onRemovePost } from "../../redux/store";

type PostsListProps = {
  onPostSelect: Dispatch<SetStateAction<number | null>>;
};

export const PostsList: React.FC<PostsListProps> = ({ onPostSelect }) => {
  const dispatch = useDispatch();
  const posts = useSelector(postsSelector);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const onPostRemove = useCallback((id: number) => {
    deletePost(id)
      .then(() => {
        dispatch(onRemovePost(id));
        onPostSelect(null);
      });
  }, [dispatch, onPostSelect]);

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
