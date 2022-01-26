export interface BasePost {
  body: string;
  title: string;
}

export interface Post extends BasePost {
  id: number;
}

export interface BaseComment {
  postId: number;
  body: string;
}

export interface Comment extends BaseComment {
  id: number;
}

export interface ActivePost extends Post {
  comments: Comment[];
}
