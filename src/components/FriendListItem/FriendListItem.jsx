import PropTypes from 'prop-types';

import { FriendCard, Status, FriendImage, Name } from './FriendListItem.styled';

export const FriendListItem = ({ friend: { isOnline, avatar, name } }) => {
  return (
    <FriendCard isOnline={isOnline}>
      <Status isOnline={isOnline}></Status>
      <FriendImage src={avatar} alt={name} />
      <Name>{name}</Name>
    </FriendCard>
  );
};

FriendListItem.propTypes = {
  friends: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }),
};
