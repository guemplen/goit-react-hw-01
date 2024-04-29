import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => (
  <table className={styles.transactionHistory}>
    <thead>
      <tr>
        <th className={styles.header}>Type</th>
        <th className={styles.header}>Amount</th>
        <th className={styles.header}>Currency</th>
      </tr>
    </thead>

    <tbody>
      {items.map((item, index) => (
        <tr
          key={item.id}
          className={index % 2 === 0 ? styles.rowEven : styles.rowOdd}
        >
          <td>{item.type}</td>
          <td>{item.amount}</td>
          <td>{item.currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default TransactionHistory;
