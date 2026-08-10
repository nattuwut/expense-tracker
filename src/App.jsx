import "./styles/App.css";
import { useState } from "react";

import Header from "./components/Header";
import SummaryCards from "./components/SummaryCards";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";

function App() {
  const [transactions, setTransactions] = useState([]);

  return (
    <div className="app">
      <Header />

      <SummaryCards />

      <TransactionForm
        setTransactions={setTransactions}
      />

      <TransactionList
        transactions={transactions}
      />
    </div>
  );
}

export default App;