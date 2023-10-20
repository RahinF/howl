interface User {
  id: string;
  username: string;
  image: string;
}

interface Post {
  id: string;
  date: Date;
  image?: string;
  content: string;
  liked: string[];
  user: User;
}

interface PostComment {
  id: string;
  user: User;
  date: Date;
  content: string;
}
