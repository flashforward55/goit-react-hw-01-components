import { Container } from 'components/App.styled';
import { Profile } from 'components/Profile/Profile';
import user from 'base/user.json';
import { Statistics } from 'components/Statistics/Statistics';
import data from 'base/data.json';
import { FriendList } from 'components/FriendList/FriendList';
import friends from 'base/friends.json';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';
import transactions from 'base/transactions.json';

export const App = () => {
  return (
    <Container>
      {/* профіль користувача */}
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      {/* статистика завантажень */}
      <Statistics title="Upload stats" stats={data} />
      {/* список друзів */}
      <FriendList friends={friends} />
      {/* історія транзакцій */}
      <TransactionHistory items={transactions} />
    </Container>
  );
};
