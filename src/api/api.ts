import { Post, Comment, BaseComment } from "../dataTypes";

const BASE_URL = 'https://bloggy-api.herokuapp.com';

export const getPosts = (): Promise<Post[]> => (
  fetch(`${BASE_URL}/posts`)
    .then(response => response.json())
);

export const getComments = (): Promise<Comment> | any  => (
  fetch(`${BASE_URL}/comments`)
    .then(response => response.json())
);

export const createPostComment = (comment: BaseComment) => (
  fetch(`${BASE_URL}/comments`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(comment),
  })
    .then(response => response.json())
)
