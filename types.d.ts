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
}

interface PostComment {
  id: string;
  user: User;
  date: Date;
  content: string;
}

interface RegisterFormValues {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}
