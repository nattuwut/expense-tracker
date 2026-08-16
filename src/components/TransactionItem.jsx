import "./../styles/TransactionItem.css";
import { useState } from "react";

function TransactionItem({
  transaction,
  onDelete,
  onEdit,
}) {
  const [isEditing, setIsEditing] = useState(false);

  const [editDescription, setEditDescription] = useState(
    transaction.description
  );

  const [editAmount, setEditAmount] = useState(
    transaction.amount
  );

  const [editType, setEditType] = useState(
    transaction.type
  );

  function handleSave() {
    if (!editDescription.trim() || !editAmount) {
      return;
    }

    onEdit(transaction.id, {
      description: editDescription.trim(),
      amount: Number(editAmount),
      type: editType,
    });

    setIsEditing(false);
  }

  function handleCancel() {
    setEditDescription(transaction.description);
    setEditAmount(transaction.amount);
    setEditType(transaction.type);

    setIsEditing(false);
  }

  return (
    <div className="transaction-item">

      {isEditing ? (
        <>
          <div className="transaction-edit-form">

            <input
              type="text"
              value={editDescription}
              onChange={(e) =>
                setEditDescription(e.target.value)
              }
            />

            <input
              type="number"
              value={editAmount}
              onChange={(e) =>
                setEditAmount(e.target.value)
              }
            />

            <select
              value={editType}
              onChange={(e) =>
                setEditType(e.target.value)
              }
            >
              <option value="income">
                Income
              </option>

              <option value="expense">
                Expense
              </option>
            </select>

          </div>

          <div className="transaction-actions">

            <button onClick={handleSave}>
              💾
            </button>

            <button onClick={handleCancel}>
              ❌
            </button>

          </div>
        </>
      ) : (
        <>
          <div className="transaction-info">

            <span className="transaction-description">
              {transaction.description}
            </span>

            <span className="transaction-date">
              {transaction.date}
            </span>

            <span className="transaction-type">
              {transaction.type === "income"
                ? "Income"
                : "Expense"}
            </span>

          </div>

          <div className="transaction-actions">

            <span
              className={`transaction-amount ${transaction.type === "income"
                ? "income"
                : "expense"
                }`}
            >
              {transaction.type === "income"
                ? "+"
                : "-"}
              ฿{transaction.amount}
            </span>

            <button
              onClick={() => setIsEditing(true)}
            >
              ✏️
            </button>

            <button
              className="delete-button"
              onClick={() => {
                const confirmed = window.confirm(
                  "Are you sure you want to delete this transaction?"
                );

                if (confirmed) {
                  onDelete(transaction.id);
                }
              }}
            >
              🗑️
            </button>

          </div>
        </>
      )}

    </div>
  );
}

export default TransactionItem;