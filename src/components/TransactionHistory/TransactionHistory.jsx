import css from "./TransactionHistory.module.css"

export default function TransactionHistory({ items }) {
  return (
/* <table>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>



  <tbody>
    <tr>
      <td>Invoice</td>
      <td>125</td>
      <td>USD</td>
    </tr>
    <tr>
      <td>Withdrawal</td>
      <td>85</td>
      <td>USD</td>
    </tr>
  </tbody>
</table> */



    <table className={css.transactionHistoryTable} >
      <thead className={css.tableHead} >
        <tr>
           <th >Type</th>
           <th >Amount</th>
           <th >Currency</th>
        </tr>
      </thead>

      <tbody className={css.tableBody} >
        {items.map(({ id,type,amount,currency
        }) => {
          return (
            <tr key={id} >
             
              <td> {type}</td>  
              <td>{amount}</td>  
              <td>{currency}</td>  
              
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}