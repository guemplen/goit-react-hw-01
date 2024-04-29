import styles from './friends.module.css'

const FriendList = ({ friends }) => (
  <ul className={styles.list}>
    {friends.map(friend => (
      <li key={friend.id} className={styles.item}>
        <div className={styles.avatar}>
          <img src={friend.avatar} alt="User avatar" />
        </div>
        <div className={styles.info}>
          <p className={styles.name}>{friend.name}</p>
          <span
            className="status"
            style={{ color: friend.isOnline ? 'green' : 'red' }}
          >
            {friend.isOnline ? 'Online' : 'Offline'}
          </span>
        </div>
      </li>
    ))}
  </ul>
);

export default FriendList;
