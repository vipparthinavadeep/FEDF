import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/dashboard">Home</Link>
        </li>

        <li>
          <Link to="/accounts">Accounts</Link>
        </li>

        <li>
          <Link to="/transactions">Transactions</Link>
        </li>

        <li>
          <Link to="/savings">Savings</Link>
        </li>

        <li>
          <Link to="/payments">Payments</Link>
        </li>

        <li>
          <Link to="/settings">Settings</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;