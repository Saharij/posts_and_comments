import { Card, Typography, CardActions, CardContent, Button } from "@mui/material";
import { useContext } from "react";
import { PostContext } from "../../context/context";

type Props = {
  id: number,
  body: string,
  title: string,
}

export const PostItem: React.FC<Props> = ({ id, body, title }) => {
  const { handlePostId } = useContext(PostContext);

  return (
    <>
      <Card sx={{ maxWidth: 600 }}>
        <CardContent>
          <Typography>
            Post: {id}
          </Typography>
          <Typography variant="h5">
            {title}
          </Typography>
          <Typography>
            {body}
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={() => {
            handlePostId(id)
          }}>
            Open post details
          </Button>
        </CardActions>
      </Card>
    </>
  )
}
