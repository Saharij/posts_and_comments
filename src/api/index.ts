import { Post, Comment, BaseComment, BasePost } from "../dataTypes";

const BASE_URL = 'https://bloggy-api.herokuapp.com';

export const getPosts = (): Promise<Post[]> => (
  fetch(`${BASE_URL}/posts`)
    .then(response => response.json())
);

export const getPost = (id: number): Promise<Comment> | any  => (
  fetch(`${BASE_URL}/posts/${id}?_embed=comments`)
    .then(response => response.json())
);

export const createPostComment = (comment: BaseComment) => (
  fetch(`${BASE_URL}/comments`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(comment),
  })
    .then(response => response.json())
);

export const createPost = (post: BasePost) => (
  fetch(`${BASE_URL}/posts`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(post),
  })
    .then(response => response.json())
);

export const deletePost = (id: number) => (
  fetch(`${BASE_URL}/posts/${id}`, {
    method: 'DELETE',
  })
    .then(response => response.json())
);

export const editPost = (id: number, post: BasePost) => (
  fetch(`${BASE_URL}/posts/${id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(post),
  })
    .then(response => response.json())
);
