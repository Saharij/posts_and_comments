import { useState } from "react";
import { Grid, Container } from "@mui/material";

import { PostsList } from "../components/PostsList/PostsList";
import { PostDetails } from "../components/PostDetails/PostDetails";

export const PostsInfoPage: React.FC = () => {
  const [currentPostId, setCurrentPostId] = useState<number | null>(null);

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={7}>
          <PostsList
            onPostSelect={setCurrentPostId}
          />
        </Grid>
        {currentPostId && (
          <Grid item xs={5}>
            <PostDetails postId={currentPostId} />
          </Grid>
        )}
      </Grid>
    </Container>
  );
};
