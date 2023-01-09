import Profile from 'components/Profile/Profile';
import Statistics from 'components/Statistics/Statistics';

import FriendList from 'components/FriendList/FriendList';
import TransactionHistory from 'components/TransactionHistory/TransactionHistory';
import user from 'components/data/user.json';
import data from 'components/data//data.json';
import friends from 'components/data//friends.json';
import transactions from 'components/data//transactions.json';

export default function App() {
  return (
    <div>
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
      <Statistics title={'Upload stats'} items={data} />
      <Statistics items={data} />
      <FriendList items={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}
