import users from '@/app/constants/users';

const comments: PostComment[] = [
  {
    id: '1',
    user: users[1],
    date: new Date('Feb 17, 2022'),
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dapibus odio ut rhoncus eleifend. Morbi iaculis malesuada tincidunt. Vestibulum ante ipsum primis in faucibus',
  },
  {
    id: '2',
    user: users[2],
    date: new Date('Mar 27, 2022'),
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dapibus odio ut rhoncus.',
  },
];

export default comments;
