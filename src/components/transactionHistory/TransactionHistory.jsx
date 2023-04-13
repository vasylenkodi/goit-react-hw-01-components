import transactions from '../../transactions.json';
import css from './TransactionHistory.module.css';
import { TransactionHistoryRow } from './TransactionHistoryRow';

export const TransactionHistory = () => {
return (
  <table class={css.transactionHistory}>
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>

    <tbody>
      {transactions.map(transaction => {
        return (
          <TransactionHistoryRow
            key={transaction.id}
            type={transaction.type}
            amount={transaction.amount}
            currency={transaction.currency}
          />
        );
      })}
    </tbody>
  </table>
);
};
