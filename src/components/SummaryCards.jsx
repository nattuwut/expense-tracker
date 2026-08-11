import "./../styles/SummaryCards.css";

function SummaryCards({ transactions }) {

  const totalIncome = transactions
    .filter((transaction) => transaction.type === "income")
    .reduce(
      (total, transaction) =>
        total + transaction.amount,
      0
    );

  const totalExpense = transactions
    .filter((transaction) => transaction.type === "expense")
    .reduce(
      (total, transaction) =>
        total + transaction.amount,
      0
    );

  const balance = totalIncome - totalExpense;

  return (
    <div className="summary-cards">

      <div className="summary-card balance">
        <span>Balance</span>
        <strong>฿{balance.toLocaleString()}</strong>
      </div>

      <div className="summary-card income">
        <span>Income</span>
        <strong>฿{totalIncome.toLocaleString()}</strong>
      </div>

      <div className="summary-card expense">
        <span>Expense</span>
        <strong>฿{totalExpense.toLocaleString()}</strong>
      </div>

    </div>
  );
}

export default SummaryCards;