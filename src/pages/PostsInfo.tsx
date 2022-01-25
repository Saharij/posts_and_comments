import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "@mui/material";

import { Post, Comment } from "../dataTypes";
import { PostContext } from "../context/context";
import { fetchComments, fetchPosts } from "../redux/store";
import { PostsList } from "../components/PostsList/PostsList";
import { commentsFromStore, postsFromStore } from "../redux/store";
import { PostDetails } from "../components/PostDetails/PostDetails";

export const PostsInfo: React.FC = () => {
  const dispatch = useDispatch();
  const posts = useSelector(postsFromStore);
  const [currentPostId, setCurrentPostId] = useState<number | null>(null);
  const comments: Comment | any = useSelector(commentsFromStore);

  const currentComments = comments.filter((item: Comment) => item.postId === currentPostId);
  const currentPost = posts.find(item => item.id === currentPostId);

  const handlePostId = (id: number) => {
    setCurrentPostId(id);
  };

  useEffect(() => {
    dispatch(fetchPosts())
  }, [])

  useEffect(() => {
    dispatch(fetchComments())
  }, [currentPostId])

  return (
    <>
      <PostContext.Provider value={{ handlePostId }}>
        <Container sx={{ display: "flex", justifyContent: "space-between" }}>
          <PostsList posts={posts} />
          {currentPost && (
            <PostDetails comments={currentComments} post={currentPost} />
          )}
        </Container>
      </PostContext.Provider>
    </>
  )
}
