interface Props {
  name: string;
  limit?: number;
}

export const getInitials = ({ name, limit = 2 }: Props) => {
  const words = name.split(' ');
  const initialsArray = words.map((word) => word.charAt(0));
  const limitedInitialsArray = initialsArray.splice(0, limit);
  const initialsString = limitedInitialsArray.join('');
  const uppercaseInitials = initialsString.toUpperCase();
  return uppercaseInitials;
};
