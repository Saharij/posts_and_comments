import { useContext } from "react";

import { Post } from "../../dataTypes";
import { List, ListItem } from "@mui/material";
import { PostItem } from "../PostItem/PostItem";

type PostsList = {
  posts: Post[];
}

export const PostsList: React.FC<PostsList> = ({ posts }) => {
  return (
    <>
      <List>
        {posts.map((item: Post) => (
          <ListItem key={item.id}>
            <PostItem
              id={item.id}
              body={item.body}
              title={item.title}
            />
          </ListItem>
        ))}
      </List>
    </>
  )
}
