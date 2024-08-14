export default function TransactionItem({ type, amount, currency }) {
  return (
    <table>
     
  <thead>
    <tr>
            <th >{type}</th>
            <th >{amount}</th>
            <th >{currency}</th>
    </tr>
  </thead>

  <tbody>
         <td>{type}</td>
         <td >{amount}</td>
         <td >{currency}</td>
  
                
  </tbody>
</table>


    
  );
}