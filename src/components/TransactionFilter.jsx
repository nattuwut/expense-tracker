import "./../styles/TransactionFilter.css";

function TransactionFilter({
  filter,
  onFilterChange,
}) {
  return (
    <div className="transaction-filter">

      <button
        className={filter === "all" ? "active" : ""}
        onClick={() => onFilterChange("all")}
      >
        All
      </button>

      <button
        className={filter === "income" ? "active" : ""}
        onClick={() => onFilterChange("income")}
      >
        Income
      </button>

      <button
        className={filter === "expense" ? "active" : ""}
        onClick={() => onFilterChange("expense")}
      >
        Expense
      </button>

    </div>
  );
}

export default TransactionFilter;