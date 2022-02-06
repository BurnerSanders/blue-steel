import React, { useState, useEffect } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const [listings, setListings] = useState([])
  const [filter, setFilter] = useState("")
  const [sortBy, setSortBy] = useState("");

  useEffect(() => {
    fetch("http://localhost:8001/transactions")
    .then(res => res.json())
    .then(data => setListings(data))
  }, [])

  const addNewListing = (newListObj) => {
    let newList = [...listings, newListObj]
    setListings(newList)
  }
  const handleSearch = (e) => {
    setFilter(e.target.value)
  }

  let filteredList = listings.filter(listing => 
    listing.description.toUpperCase().includes(filter.toUpperCase()
    ))

  const handleSort = (e) => {
    let newList = [...listings]
    setSortBy(e.target.value);
    setListings((newList.sort((a,b) => 
      sortBy !== "Category" ? a.category.localeCompare(b.category) : a.description.localeCompare(b.description)
    )))
  }
    const handleDelete = (e) => {
      let id = parseInt(e.target.id)
      fetch(`http://localhost:8001/transactions/${id}`, {
        method: "DELETE"
      })
      .then(res => res.json())
      .then(setListings(listings.filter(listing => listing.id !== id)))
    }
  
  return (
    <div>
      <Search 
      handleSearch={handleSearch} 
      filter={filter} 
      sortBy={sortBy}
      handleSort={handleSort}/>
      <AddTransactionForm addNewListing={addNewListing}/>
      <TransactionsList listings={filteredList} handleDelete={handleDelete}/>
    </div>
  );
}

export default AccountContainer;
