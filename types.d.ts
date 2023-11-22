interface Author {
  _id: string;
  username: string;
  avatar: string;
}

interface Post {
  _id: string;
  _createdAt: Date;
  body?: string;
  mainImage: string;
  liked?: string[];
  author: Author;
  commentCount: number;
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
