import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, AnyAction, applyMiddleware } from 'redux';

import { ActivePost, Post } from '../dataTypes';
import { getPosts, getPost } from '../api';

const EDIT_POST = 'EDIT_POST';
const REMOVE_POST = 'REMOVE_POST';
const ADD_NEW_POST = 'ADD_NEW_POST';
const ADD_NEW_COMMENT = 'ADD_NEW_COMMENT';
const FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS';
const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';

export const postsSelector = (state: InitialState) => state.posts;
export const activePostSelector = (state: InitialState) => state.acitvePost;

export const fetchPosts = () => {
  return (dispatch: any) => {
    getPosts()
      .then(response => (
        dispatch({ type: FETCH_POSTS_SUCCESS, data: response })
      ));
  };
};

export const fetchPost = (id: number) => {
  return (dispatch: any) => {
    getPost(id)
      .then((response: Comment) => (
        dispatch({ type: FETCH_POST_SUCCESS, data: response })
      ));
  };
};

export const onEditPost = (post: Post) => ({
  type: EDIT_POST,
  data: post,
});

export const onCreatedComment = (comment: Comment) => ({
  type: ADD_NEW_COMMENT,
  data: comment,
});

export const onCreatedPost = (post: Post) => ({
  type: ADD_NEW_POST,
  data: post,
});

export const onRemovePost = (id: number) => ({
  type: REMOVE_POST,
  data: id,
});

type InitialState = {
  posts: Post[] | [];
  acitvePost: ActivePost | null;
};

const initialState: InitialState = {
  posts: [],
  acitvePost: null,
};

const rootReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        posts: [...action.data],
      };

    case FETCH_POST_SUCCESS:
      return {
        ...state,
        acitvePost: action.data,
      };

    case ADD_NEW_COMMENT:
      return {
        ...state,
        acitvePost: {
          ...state.acitvePost,
          comments: state?.acitvePost?.comments ? [...state.acitvePost.comments, action.data] : [action.data],
        },
      };

    case ADD_NEW_POST:
      return {
        ...state,
        posts: [...state.posts, action.data],
      };

    case REMOVE_POST:
      return {
        ...state,
        posts: state.posts.filter(item => item.id !== action.data),
      };

    case EDIT_POST:
      return {
        ...state,
        posts: state.posts.map(item => (
          item.id === action.data.id ? action.data : item
        )),
      };

    default:
      return state;
  }
};

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk),
  ),
);

export default store;
