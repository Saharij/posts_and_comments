import { Container } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ChangeEvent, useState } from "react";

import { createPost } from "../api";
import { CreateNewPost } from "../components/Forms/CreateNewPost";
import { onCreatedPost } from "../redux/store";

type ItitialPost = {
  title: string;
  body: string;
}

const initialPost: ItitialPost = {
  title: '',
  body: '',
};

export const CreatePostPage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [post, setPost] = useState(initialPost);
  const isSubmitDisabled = !post.title || !post.body;

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmitDisabled) return;

    createPost({
      body: post.body,
      title: post.title,
    })
      .then(result => {
        dispatch(onCreatedPost(result));
        setPost(initialPost);
        navigate('/');
      });
  };

  const inputChange = (e: ChangeEvent<HTMLInputElement> ) => {
    setPost((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Container>
      <CreateNewPost
        title={post.title}
        body={post.body}
        isDisabled={isSubmitDisabled}
        submitForm={submitForm}
        inputChange={inputChange}
      />
    </Container>
  );
};
