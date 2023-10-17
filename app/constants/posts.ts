import users from '@/app/constants/users';

const posts: Post[] = [
  {
    date: new Date('December 17, 2022 09:24:00'),
    content:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non vitae velit nostrum architecto rerum iste voluptates sit quis perspiciatis tenetur.',
    liked: ['1', '2', '3'],
    user: users[0],
  },
  {
    date: new Date('December 17, 2022 09:24:00'),
    image: 'https://images.pexels.com/photos/1618606/pexels-photo-1618606.jpeg',
    content:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non vitae velit nostrum architecto rerum iste voluptates sit quis perspiciatis tenetur.',
    liked: ['1', '2', '3'],
    user: users[1],
  },
  {
    date: new Date('December 15, 2022 09:24:00'),
    image: 'https://images.pexels.com/photos/1618606/pexels-photo-1618606.jpeg',
    content:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non vitae velit nostrum architecto rerum iste voluptates sit quis perspiciatis tenetur.',
    liked: ['1', '2', '3'],
    user: users[2],
  },
  {
    date: new Date('December 27, 2022 09:24:00'),
    image: 'https://images.pexels.com/photos/1618606/pexels-photo-1618606.jpeg',
    content:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non vitae velit nostrum architecto rerum iste voluptates sit quis perspiciatis tenetur.',
    liked: ['1', '2', '3'],
    user: users[3],
  },
  {
    date: new Date('December 11, 2012 09:24:00'),
    image: 'https://images.pexels.com/photos/1618606/pexels-photo-1618606.jpeg',
    content:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non vitae velit nostrum architecto rerum iste voluptates sit quis perspiciatis tenetur.',
    liked: ['1', '2', '3'],
    user: users[4],
  },
];

export default posts;
