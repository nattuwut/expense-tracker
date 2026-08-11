import "./styles/App.css";
import { useState } from "react";

import Header from "./components/Header";
import SummaryCards from "./components/SummaryCards";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";

function App() {
  const [transactions, setTransactions] = useState([]);

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

      <SummaryCards
        transactions={transactions}
      />

      <TransactionForm
        setTransactions={setTransactions}
      />

      <TransactionList
        transactions={transactions}
        onDelete={handleDeleteTransaction}
        onEdit={handleEditTransaction}
      />
    </div>
  );
}

export default App;