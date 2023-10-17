interface User {
  id: string;
  username: string;
  image: string;
}

interface Post {
  date: Date;
  image?: string;
  content: string;
  liked: string[];
  user: User;
}
