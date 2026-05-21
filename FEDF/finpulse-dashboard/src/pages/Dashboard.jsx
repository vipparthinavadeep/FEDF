import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import BalanceCard from "../components/BalanceCard";
import TransactionTable from "../components/TransactionTable";
import Layout from "../components/Layout";

import "../styles/dashboard.css";

function Dashboard() {
  return (
    <div>
      <Navbar />

      <div className="dashboard-layout">
        <Sidebar />

        <div className="dashboard-content">

          <div className="welcome-section">
            <h3>Welcome to FinPulse 👋</h3>

            <h1>
              Digital Banking Personal Finance Dashboard Interface
            </h1>

            <p>
              Manage your banking activities, savings, transactions,
              and financial insights in one secure platform.
            </p>
          </div>

          <div className="card-grid">
            <BalanceCard
              title="Current Balance"
              amount="₹1,25,000"
            />

            <BalanceCard
              title="Total Savings"
              amount="₹80,000"
            />

            <BalanceCard
              title="Monthly Expenses"
              amount="₹25,000"
            />
          </div>

          <TransactionTable />
        </div>
      </div>
    </div>
  );
  return (
  <Layout>
    {/* Existing dashboard content */}
  </Layout>
);
}

export default Dashboard;