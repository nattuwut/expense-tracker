import "./../styles/MonthlySummary.css";

function MonthlySummary({ transactions }) {

  const currentMonth = new Date()
    .toISOString()
    .slice(0, 7);

  const monthlyTransactions = transactions.filter(
    (transaction) =>
      transaction.date?.startsWith(currentMonth)
  );

  const monthlyIncome = monthlyTransactions
    .filter(
      (transaction) =>
        transaction.type === "income"
    )
    .reduce(
      (total, transaction) =>
        total + transaction.amount,
      0
    );

  const monthlyExpense = monthlyTransactions
    .filter(
      (transaction) =>
        transaction.type === "expense"
    )
    .reduce(
      (total, transaction) =>
        total + transaction.amount,
      0
    );

  const monthlyBalance =
    monthlyIncome - monthlyExpense;

  return (
    <div className="monthly-summary">

      <h2>This Month</h2>

      <div className="monthly-summary-grid">

        <div className="monthly-card income">
          <span>Income</span>
          <strong>
            ฿{monthlyIncome.toLocaleString()}
          </strong>
        </div>

        <div className="monthly-card expense">
          <span>Expense</span>
          <strong>
            ฿{monthlyExpense.toLocaleString()}
          </strong>
        </div>

        <div className="monthly-card balance">
          <span>Balance</span>
          <strong>
            ฿{monthlyBalance.toLocaleString()}
          </strong>
        </div>

      </div>

    </div>
  );
}

export default MonthlySummary;