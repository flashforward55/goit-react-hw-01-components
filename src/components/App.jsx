
import { Container } from './App.styled';
import { Profile } from 'components/Profile/Profile';
import user from 'base/user.json';
import { Statistics } from './Statistics/Statistics';
import data from 'base/data.json'



export const App = () => {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
    </Container>

  );
};
