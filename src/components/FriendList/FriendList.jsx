import FriendListItem from '../FriendListItem/FriendListItem';
import styles from './friendList.module.css';

const FriendList = ({ friends }) => (
  <ul className={styles.list}>
    {friends.map(friend => (
      <FriendListItem key={friend.id} friend={friend} />
    ))}
  </ul>
);

export default FriendList;
