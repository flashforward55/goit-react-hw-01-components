import PropTypes from 'prop-types';
import {
  Card,
  DescriptionWrap,
  StatsList,
  StatsItem,
  StatsLabel,
  UserAvatar,
  UserLocation,
  UserName,
  UserTag,
  StatsQuantity,
} from './Profile.styled';

import { capitalizeFirstLetter } from './CapitalizeFirstLetter';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  const keys = Object.keys({ followers, views, likes });

  return (
    <Card>
      <DescriptionWrap>
        <UserAvatar src={avatar} alt={username} />
        <UserName>{username}</UserName>
        <UserTag>@{tag}</UserTag>
        <UserLocation>{location}</UserLocation>
      </DescriptionWrap>

      <StatsList>
        <StatsItem key={keys[0]}>
          <StatsLabel>{capitalizeFirstLetter(keys[0])}</StatsLabel>
          <StatsQuantity>
            {followers.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          </StatsQuantity>
        </StatsItem>
        <StatsItem key={keys[1]}>
          <StatsLabel>{capitalizeFirstLetter(keys[1])}</StatsLabel>
          <StatsQuantity>
            {views.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          </StatsQuantity>
        </StatsItem>
        <StatsItem key={keys[2]}>
          <StatsLabel>{capitalizeFirstLetter(keys[2])}</StatsLabel>
          <StatsQuantity>
            {likes.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          </StatsQuantity>
        </StatsItem>
      </StatsList>
    </Card>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
