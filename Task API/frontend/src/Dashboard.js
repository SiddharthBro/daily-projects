import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "40px" }}>
      <h2>Dashboard</h2>
      <p>Welcome 🎉</p>

      <button onClick={() => navigate("/")}>
        Logout
      </button>
    </div>
  );
}

export default Dashboard;
