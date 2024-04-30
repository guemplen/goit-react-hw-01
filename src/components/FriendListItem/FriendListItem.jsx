import styles from './friendListItem.module.css';

const FriendListItem = ({ friend }) => (
  <li className={styles.item}>
    <div className={styles.avatar}>
      <img src={friend.avatar} alt="User avatar" />
    </div>
    <div className={styles.info}>
      <p className={styles.name}>{friend.name}</p>
      <span className={friend.isOnline ? styles.online : styles.offline}>
        {friend.isOnline ? 'Online' : 'Offline'}
      </span>
    </div>
  </li>
);

export default FriendListItem;