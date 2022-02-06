import React, { useState } from "react";

function AddTransactionForm({ addNewListing }) {
    const [formData, setFormData] = useState({
        date: "",
        description: "",
        category: "",
        amount: ""
    })

    const handleForm = (e) => {
        e.preventDefault()
        fetch("http://localhost:8001/transactions", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(data => addNewListing(data))
    }

  return (
    <div className="ui segment">
      <form onSubmit={handleForm}className="ui form">
        <div className="inline fields">
          <input 
          type="date" 
          name="date" 
          value={formData.date}
          onChange={(e) => setFormData({
          ...formData, date: e.target.value
          })} />
          <input 
          type="text" 
          name="description" 
          placeholder="Description" 
          value={formData.description}
          onChange={(e) => setFormData({
          ...formData, description: e.target.value
          })}/>
          <input 
          type="text" 
          name="category" 
          placeholder="Category" 
          value={formData.category}
          onChange={(e) => setFormData({
          ...formData, category: e.target.value
          })}/>
          <input 
          type="number" 
          name="amount" 
          placeholder="Amount" 
          step="0.01" 
          value={formData.amount}
          onChange={(e) => setFormData({
          ...formData, amount: parseFloat(e.target.value)
          })}/>
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
