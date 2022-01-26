import { Typography, CardContent  } from "@mui/material";

type Props = {
  id: number,
  body: string,
  title: string,
}

export const PostContent: React.FC<Props> = ({ id, body, title }) => {
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
