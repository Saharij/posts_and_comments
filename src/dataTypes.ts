export interface Post {
  body: string;
  id: number;
  title: string;
}

export interface BaseComment {
  postId: number;
  body: string;
}

export interface Comment extends BaseComment {
  id: number;
}
