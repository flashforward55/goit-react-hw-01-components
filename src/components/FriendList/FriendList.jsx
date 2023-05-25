import PropTypes from 'prop-types';
import { FriendListItem } from 'components/FriendList/FrindListItem/FriendListItem';
import { Friends } from './FriendList.styled';

export const FriendList = ({ friends }) => (
  <Friends>
    {friends.map(({ id, ...friendData }) => (
      <FriendListItem key={id} {...friendData} />
    ))}
  </Friends>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
