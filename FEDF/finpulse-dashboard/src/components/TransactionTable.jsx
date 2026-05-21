function TransactionTable() {
  const transactions = [
    {
      id: 1,
      name: "Amazon Purchase",
      amount: "- ₹2,000",
      status: "Completed",
    },
    {
      id: 2,
      name: "Salary Credit",
      amount: "+ ₹50,000",
      status: "Completed",
    },
    {
      id: 3,
      name: "Electricity Bill",
      amount: "- ₹1,500",
      status: "Pending",
    },
  ];

  return (
    <div className="table-container">
      <h2>Recent Transactions</h2>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.amount}</td>
              <td>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionTable;