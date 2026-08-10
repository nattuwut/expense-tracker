import "./../styles/TransactionList.css";
import TransactionItem from "./TransactionItem";

function TransactionList({
  transactions,
  onDelete,
  onEdit,
}) {
  return (
    <div className="transaction-list">
      <h2>Transactions</h2>

      {transactions.length === 0 ? (
        <p>No transactions yet.</p>
      ) : (
        transactions.map((transaction) => (
          <TransactionItem
            key={transaction.id}
            transaction={transaction}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))
      )}
    </div>
  );
}

export default TransactionList;