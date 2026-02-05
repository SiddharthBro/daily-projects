import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "40px" }}>
      <h2>Login Page</h2>

      <input type="text" placeholder="Username" /><br /><br />
      <input type="password" placeholder="Password" /><br /><br />

      <button onClick={() => navigate("/dashboard")}>
        Login
      </button>
    </div>
  );
}

export default Login;
