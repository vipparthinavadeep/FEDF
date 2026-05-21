import Layout from "../components/Layout";

function Transactions() {
  return (
    <Layout>
      <div className="page-content">
        <h1>Transactions</h1>

        <div className="info-card">
          <p>Amazon Purchase - ₹2,000</p>
          <p>Salary Credit - ₹50,000</p>
          <p>Electricity Bill - ₹1,500</p>
        </div>
      </div>
    </Layout>
  );
}

export default Transactions;