import css from './TransactionHistory.module.css';
export default function TransactionHistory({items}){
  return(
  <table className={css.transactionHistory}>
  <thead className={css.tableHead}>
    <tr>
      <th className={css.tableHeadear}>Type</th>
      <th className={css.tableHeadear}>Amount</th>
      <th className={css.tableHeadear}>Currency</th>
    </tr>
  </thead>

  <tbody className={css.tableBody}>
  {items.map((item)=>{
  return <tr key={item.id} className={css.tableBodyRow} >
   <td className={css.tableBodyElement}>{item.type} </td>
   <td className={css.tableBodyElement}>{item.amount}</td>
   <td className={css.tableBodyElement}>{item.currency}</td>
  </tr>
  })}
  </tbody>
</table>

  ) 
}