import navLinks from '@/app/constants/nav';

const user: User = {
  id: '1',
  username: 'Joy Boy',
  image: 'https://github.com/shadcn.png',
};

const post: Post = {
  date: new Date('December 17, 2022 09:24:00'),
  image: 'https://images.pexels.com/photos/1618606/pexels-photo-1618606.jpeg',
  content:
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non vitae velit nostrum architecto rerum iste voluptates sit quis perspiciatis tenetur.',
  liked: ['1', '2', '3'],
};

export { navLinks, post, user };
