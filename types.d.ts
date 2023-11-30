interface Author {
  _id: string;
  username: string;
  avatar: string;
}

interface Likes {
  _id: string;
  _key: string;
}

interface Post {
  _id: string;
  _createdAt: Date;
  body?: string;
  mainImage: string;
  liked?: string[];
  author: Author;
  commentCount: number;
  likes: Likes[] | null;
}

interface PostComment {
  _id: string;
  author: Author;
  _createdAt: Date;
  body: string;
}

interface RegisterFormValues {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}
