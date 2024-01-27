import { Profile } from "./Profile/Profile"
import user from "../data/user"
import { Statistics } from "./Statistics/Statistics"
import data from "../data/data.json"
import { FriendList } from "./FriendList/FriendList"
import friends from "../data/friends.json"
import { TransactionHistory } from "./TransactionHistory/TransactionHistory"
import transactions from '../data/transactions'

export const App = () => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          color: '#010101',
          height: '40vh',
        }}
      >
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
        <Statistics stats={data} />
      </div>
      <div  
        style={{
          display: 'flex',
          color: '#010101',
          position: 'relative',
        }}>
          <FriendList friends={friends} />
          <h4 style={{
        position: 'absolute',
        zIndex: '100',
        color: '#fff',
        textShadow: '2px 2px 1px #000'
     }}>Friends:</h4>

        <TransactionHistory items={transactions} />
      </div>
    </>
  );
};
