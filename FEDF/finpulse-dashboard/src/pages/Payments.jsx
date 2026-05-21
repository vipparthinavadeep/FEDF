import Layout from "../components/Layout";

function Payments() {
  return (
    <Layout>
      <div className="page-content">
        <h1>Payments</h1>

        <div className="info-card">
          <p>Mobile Recharge</p>
          <p>Electricity Bill Payment</p>
          <p>UPI Transfers</p>
        </div>
      </div>
    </Layout>
  );
}

export default Payments;