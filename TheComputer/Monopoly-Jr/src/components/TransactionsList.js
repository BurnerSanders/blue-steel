import React from "react";
import Transaction from "./Transaction";

function TransactionsList({listings, addNewListing, handleDelete}) {

  const displayList = listings.map(listing => {
    return <Transaction key={listing.id} listing={listing} handleDelete={handleDelete}/>
  })
  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
        </tr>
        {displayList}
      </tbody>
    </table>
  );
}

export default TransactionsList;
