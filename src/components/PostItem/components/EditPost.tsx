import React, { ChangeEvent } from "react";
import { FormGroup, CardActions, Button, TextField } from "@mui/material";

type EditPostProps = {
  title: string;
  body: string;
  isDisabled: boolean;
  handleClick: () => void;
  submitChangesForm: (e: React.FormEvent) => void;
  inputChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const EditPost: React.FC<EditPostProps> = ({
  title,
  body,
  isDisabled,
  handleClick,
  submitChangesForm,
  inputChange,
}) => (
  <form onSubmit={submitChangesForm}>
    <FormGroup>
      <TextField
        size="small"
        value={title}
        name="title"
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          inputChange(e);
        }}
        placeholder="Write a title for your post"
      />
      <TextField
        size="small"
        value={body}
        name="body"
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          inputChange(e);
        }}
        placeholder="Write a content for your post"
      />
      <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button onClick={handleClick}>
          Cancel editing
        </Button>
        <Button type="submit" disabled={isDisabled}>
          Save changes
        </Button>
      </CardActions>
    </FormGroup>
  </form>
);
