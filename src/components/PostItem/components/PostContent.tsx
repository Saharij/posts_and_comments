import { Typography, CardContent  } from "@mui/material";

type PostContentProps = {
  id: number,
  body: string,
  title: string,
}

export const PostContent: React.FC<PostContentProps> = ({ id, body, title }) => {
  return (
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
  );
};
