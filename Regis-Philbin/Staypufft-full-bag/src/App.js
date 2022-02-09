
import React, {useState, useEffect} from 'react';
import BillCollection from './components/BillCollection';
import BillsCast from './components/BillsCast';

export default function App() {

  const billsAPI = "http://localhost:8002/bills"

  const [bills, setBills] = useState([])

  useEffect((() => (
    fetch(billsAPI)
    .then(resp => resp.json())
    .then(data => setBills(data))
  )), [])

  function castBill(id) {
    setBills(bills.map(bill => 
        bill.id === id ? {...bill, isCast: true} : bill
      ))
  }

  function removeBill(id) {
    setBills(bills.map(bill => 
        bill.id === id ? {...bill, isCast: false} : bill
      ))
  }

  function fireBill(id) {
    setBills(bills.filter(bill => bill.id !== id))
  }

  return (
    <div>
      <BillsCast bills={bills.filter(bill => bill.isCast)} handleClick={removeBill} fireBill={fireBill}/>
      <BillCollection bills={bills} handleClick={castBill} fireBill={fireBill}/>
    </div>
  );
}