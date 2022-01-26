import React, { ChangeEvent } from "react";
import { FormGroup, Button, TextField } from "@mui/material";

type CreateNewComment = {
  inputValue: string;
  isDisabled: boolean;
  inputChange: (e: string) => void;
  submitForm: (e: React.FormEvent) => void;
}

export const CreateNewComment: React.FC<CreateNewComment> = ({
  inputValue,
  isDisabled,
  inputChange,
  submitForm,
}) => (
  <form onSubmit={submitForm}>
    <FormGroup>
      <TextField
        size="small"
        value={inputValue}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          inputChange(e.target.value);
        }}
        placeholder="Write here your comment"
      />
      <Button type="submit" disabled={isDisabled}>
        Create new comment
      </Button>
    </FormGroup>
  </form>
);
