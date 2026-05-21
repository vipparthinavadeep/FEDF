import Layout from "../components/Layout";

function Settings() {
  return (
    <Layout>
      <div className="page-content">
        <h1>Settings</h1>

        <div className="info-card">
          <p>Profile Settings</p>
          <p>Password & Security</p>
          <p>Notification Preferences</p>
        </div>
      </div>
    </Layout>
  );
}

export default Settings;