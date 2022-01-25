import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, AnyAction, applyMiddleware } from 'redux';

import { Post } from '../dataTypes';
import { getPosts } from '../api/api';
import { getComments } from '../api/api';

const ADD_NEW_COMMENT = 'ADD_NEW_COMMENT';
const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
const FETCH_COMMENTS_SUCCESS = 'FETCH_COMMENTS_SUCCESS';

export const postsFromStore = (state: InitialState) => state.posts;
export const commentsFromStore = (state: InitialState) => state.comments;

export const fetchPosts = () => {
  return (dispatch: any) => {
    getPosts()
      .then(response => dispatch({ type: FETCH_POSTS_SUCCESS, data: response }))
  }
}

export const fetchComments = () => {
  return (dispatch: any) => {
    getComments()
      .then((response: Comment) => dispatch({ type: FETCH_COMMENTS_SUCCESS, data: response }))
  }
}

export const onCreatedComment = (comment: Comment) => ({
  type: ADD_NEW_COMMENT,
  data: comment,
})

type InitialState = {
  posts: Post[] | [];
  comments: Comment[] | [];
};

const initialState: InitialState = {
  posts: [],
  comments: [],
};

const rootReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        posts: [...action.data]
      }

    case FETCH_COMMENTS_SUCCESS:
      return {
        ...state,
        comments: [...action.data],
      }

    case ADD_NEW_COMMENT:
      return {
        ...state,
        comments: [...state.comments, action.data]
      }

    default:
      return state;
  }
}

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk),
  ),
)

export default store;
