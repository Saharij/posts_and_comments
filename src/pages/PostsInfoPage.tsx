import { useState } from "react";
import { Grid, Container } from "@mui/material";

import { PostsList } from "../components/PostsList/PostsList";
import { PostDetails } from "../components/PostDetails/PostDetails";

export const PostsInfoPage: React.FC = () => {
  const [activePostId, setActivePostId] = useState<number | null>(null);

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={7}>
          <PostsList onPostSelect={setActivePostId} />
        </Grid>
        {activePostId && (
          <Grid item xs={5}>
            <PostDetails postId={activePostId} />
          </Grid>
        )}
      </Grid>
    </Container>
  );
};
