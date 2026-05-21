import Layout from "../components/Layout";

function Accounts() {
  return (
    <Layout>
      <div className="page-content">
        <h1>Accounts</h1>

        <div className="info-card">
          <h3>Savings Account</h3>
          <p>Account Number: XXXX5678</p>
          <p>Balance: ₹1,25,000</p>
        </div>

        <div className="info-card">
          <h3>Current Account</h3>
          <p>Account Number: XXXX9876</p>
          <p>Balance: ₹45,000</p>
        </div>
      </div>
    </Layout>
  );
}

export default Accounts;