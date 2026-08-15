import "./../styles/TransactionSearch.css";

function TransactionSearch({
  search,
  onSearch,
}) {
  return (
    <div className="transaction-search">
      <input
        type="text"
        placeholder="Search transactions..."
        value={search}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}

export default TransactionSearch;