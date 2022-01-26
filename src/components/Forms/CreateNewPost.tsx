import React, { ChangeEvent } from "react";
import { Typography, FormGroup, Button, TextField, Container, Card } from "@mui/material";

type CreateNewPostProps = {
  title: string;
  body: string;
  isDisabled: boolean;
  submitForm: (e: React.FormEvent) => void;
  inputChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const CreateNewPost: React.FC<CreateNewPostProps> = ({
  title,
  body,
  isDisabled,
  submitForm,
  inputChange,
}) => (
  <Container sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
    <Typography variant="h2" sx={{ marginBottom: 3 }}>
      Create new post
    </Typography>
    <Card sx={{ minWidth: 600, padding: 2 }}>
      <form onSubmit={submitForm}>
        <FormGroup>
          <TextField
            size="small"
            value={title}
            name="title"
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              inputChange(e);
            }}
            placeholder="Write a title for your post"
            sx={{ marginBottom: 2 }}
          />
          <TextField
            size="small"
            value={body}
            name="body"
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              inputChange(e);
            }}
            placeholder="Write a content for your post"
            sx={{ marginBottom: 2 }}
          />
          <Button type="submit" disabled={isDisabled}>
            Create new post
          </Button>
        </FormGroup>
      </form>
    </Card>
  </Container>
);
