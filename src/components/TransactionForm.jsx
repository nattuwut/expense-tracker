import "./../styles/TransactionForm.css";
import { useState } from "react";

function TransactionForm({ setTransactions }) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("expense");

  function handleAddTransaction() {
    if (!description.trim() || !amount) return;

    const newTransaction = {
      id: Date.now(),
      description: description.trim(),
      amount: Number(amount),
      type: type,
      date: new Date().toISOString().split("T")[0],
    };

    setTransactions((prev) => [
      ...prev,
      newTransaction,
    ]);

    setDescription("");
    setAmount("");
    setType("expense");
  }

  return (
    <div className="transaction-form">
      <h2>Add Transaction</h2>

      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>

      <button onClick={handleAddTransaction}>
        + Add Transaction
      </button>
    </div>
  );
}

export default TransactionForm;