import { Profile } from '../Profile/Profile';
import { Container } from './App.styled';
import user from '../../user.json';

export const App = () => {
  return (
    <Container>
      <Profile
        name={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </Container>
  );
};
