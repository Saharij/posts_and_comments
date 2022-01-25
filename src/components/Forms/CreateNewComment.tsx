import React, { ChangeEvent } from "react";
import { FormGroup, Button, TextField } from "@mui/material";

type CreateNewComment = {
  inputValue: string;
  inputChange: (e: string) => void;
  submitForm: (e: React.FormEvent) => void;
}

export const CreateNewComment: React.FC<CreateNewComment> = ({ inputValue, inputChange, submitForm }) => {
  return (
    <>
      <form onSubmit={submitForm}>
        <FormGroup>
          <TextField
            size="small"
            value={inputValue}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {inputChange(e.target.value)}}
            placeholder="Write here your comment"
          />
          <Button type="submit">
            Create new comment
          </Button>
        </FormGroup>
      </form>
    </>
  )
}
