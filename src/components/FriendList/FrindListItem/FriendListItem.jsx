import PropTypes from 'prop-types';
import {
  FriendsAvatar,
  FriendsItem,
  FriendsName,
  FriendsStatus,
} from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => (
  <FriendsItem>
    <FriendsStatus isOnline={isOnline} />
    <FriendsAvatar src={avatar} alt={name} width="58" />
    <FriendsName>{name}</FriendsName>
  </FriendsItem>
);

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
