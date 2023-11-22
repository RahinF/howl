import users from '@/app/constants/users';

const comments: PostComment[] = [
  {
    _id: '1',
    author: users[1],
    _createdAt: new Date('Feb 17, 2022'),
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dapibus odio ut rhoncus eleifend. Morbi iaculis malesuada tincidunt. Vestibulum ante ipsum primis in faucibus',
  },
  {
    _id: '2',
    author: users[2],
    _createdAt: new Date('Mar 27, 2022'),
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dapibus odio ut rhoncus.',
  },
];

export default comments;
