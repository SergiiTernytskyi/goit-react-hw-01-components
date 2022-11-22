import PropTypes from 'prop-types';

import { List, FriendsBoard } from './FriendList.styled';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';

export const FriendsList = ({ friends }) => {
  return (
    <List>
      {friends.map(friend => {
        return (
          <FriendsBoard key={friend.id}>
            <FriendListItem friend={friend} />
          </FriendsBoard>
        );
      })}
    </List>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired
  ),
};
