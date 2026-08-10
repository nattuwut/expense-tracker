import "./../styles/TransactionList.css";

function TransactionList({ transactions }) {
  return (
    <div className="transaction-list">
      <h2>Transactions</h2>

      {transactions.length === 0 ? (
        <p>No transactions yet.</p>
      ) : (
        transactions.map((transaction) => (
          <div key={transaction.id}>
            <span>
              {transaction.description}
            </span>

            <span>
              {transaction.type === "income" ? "+" : "-"}
              ฿{transaction.amount}
            </span>
          </div>
        ))
      )}
    </div>
  );
}

export default TransactionList;