function BalanceCard({ title, amount }) {
  return (
    <div className="balance-card">
      <h3>{title}</h3>
      <p>{amount}</p>
    </div>
  );
}

export default BalanceCard;