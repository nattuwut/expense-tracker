import "./styles/App.css";
import { useState, useEffect } from "react";

import Header from "./components/Header";
import SummaryCards from "./components/SummaryCards";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import TransactionFilter from "./components/TransactionFilter";
import TransactionSearch from "./components/TransactionSearch";
import MonthlySummary from "./components/MonthlySummary";
import ExpenseChart from "./components/ExpenseChart";

function App() {
  const [transactions, setTransactions] = useState(() => {
    const savedTransactions = localStorage.getItem("transactions");

    return savedTransactions
      ? JSON.parse(savedTransactions)
      : [];
  });

  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem(
      "transactions",
      JSON.stringify(transactions)
    );
  }, [transactions]);

  const filteredTransactions = transactions
    .filter((transaction) => {
      const matchesFilter =
        filter === "all" ||
        transaction.type === filter;

      const matchesSearch =
        transaction.description
          .toLowerCase()
          .includes(search.toLowerCase());

      return matchesFilter && matchesSearch;
    })
    .sort(
      (a, b) =>
        new Date(b.date) - new Date(a.date)
    );

  function handleDeleteTransaction(id) {
    setTransactions((prev) =>
      prev.filter((transaction) => transaction.id !== id)
    );
  }

  function handleEditTransaction(id, updatedTransaction) {
    setTransactions((prev) =>
      prev.map((transaction) =>
        transaction.id === id
          ? {
            ...transaction,
            ...updatedTransaction,
          }
          : transaction
      )
    );
  }

  return (
    <div className="app">

      <Header />

      <main>

        <section className="dashboard-section">

          <SummaryCards
            transactions={transactions}
          />

          <MonthlySummary
            transactions={transactions}
          />

          <ExpenseChart
            transactions={transactions}
          />

        </section>

        <section className="transaction-section">

          <TransactionForm
            setTransactions={setTransactions}
          />

          <TransactionSearch
            search={search}
            onSearch={setSearch}
          />

          <TransactionFilter
            filter={filter}
            onFilterChange={setFilter}
          />

          <TransactionList
            transactions={filteredTransactions}
            hasTransactions={transactions.length > 0}
            onDelete={handleDeleteTransaction}
            onEdit={handleEditTransaction}
          />

        </section>

      </main>

    </div>
  );
}

export default App;