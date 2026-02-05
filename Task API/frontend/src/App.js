import { useEffect, useState } from "react";
import UserForm from "./components/UserForm";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  // Fetch users from backend
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Add User</h2>

      {/* React Form */}
      <UserForm />

      <hr />

      <h2>User List (Fetched from Backend)</h2>

      {users.length === 0 ? (
        <p>No users found</p>
      ) : (
        users.map((user, index) => (
          <p key={index}>
            {user.name} - {user.email}
          </p>
        ))
      )}
    </div>
  );
}

export default App;
