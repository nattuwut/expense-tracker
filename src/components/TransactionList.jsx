import "./../styles/TransactionList.css";
import TransactionItem from "./TransactionItem";

function TransactionList({
  transactions,
  hasTransactions,
  onDelete,
  onEdit,
}) {
  return (
    <div className="transaction-list">
      <h2>Transactions</h2>

      {transactions.length === 0 ? (
        !hasTransactions ? (
          <div className="empty-transactions">
            <div className="empty-icon">
              📋
            </div>

            <h3>No transactions yet</h3>

            <p>
              Start tracking your income and expenses
              by adding your first transaction.
            </p>
          </div>
        ) : (
          <div className="empty-transactions">
            <div className="empty-icon">🔍</div>
            <h3>No matching transactions</h3>
            <p>Try changing your search or filter.</p>
          </div>
        )
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