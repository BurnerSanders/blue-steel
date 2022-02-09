import React from "react";

function Transaction({listing: {id, date, description, category, amount}, handleDelete}) {
  return (
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td style={amount > 0 ? { color: 'green'} : { color: 'red' }}>{amount}</td>
      <td><button id={id} onClick={handleDelete} className="" style={{ color: 'red'}} >X</button></td>
    </tr>
  );
}

export default Transaction;
