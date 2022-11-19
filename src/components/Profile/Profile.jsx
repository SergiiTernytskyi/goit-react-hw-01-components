import PropTypes from 'prop-types';

import {
  ProfileCard,
  Description,
  AvatarImage,
  Name,
  Tag,
  Location,
  StatsList,
  StatsItem,
  Label,
  Quantity,
} from './Profile.styled';

export const Profile = ({ name, tag, location, avatar, stats }) => {
  return (
    <ProfileCard>
      <Description>
        <AvatarImage src={avatar} alt={name} />
        <Name>{name}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <StatsList>
        <StatsItem>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </StatsItem>
      </StatsList>
    </ProfileCard>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
