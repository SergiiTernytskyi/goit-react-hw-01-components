import user from '../../resourses/user.json';
import data from '../../resourses/data.json';
import friends from '../../resourses/friends.json';
import transactions from '../../resourses/transactions.json';

import { Container } from './App.styled';
import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendsList } from 'components/FriendList/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';

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

      <Statistics title={'Upload stats'} stats={data} />

      <Statistics stats={data} />

      <FriendsList friends={friends} />

      <TransactionHistory items={transactions} />
    </Container>
  );
};
