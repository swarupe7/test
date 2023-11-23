//import axios from "axios";
//there is some problem with axios 
import { useState } from "react";


const Login = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({});

  // const handleClick = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   try {
  //     const { data } = await fetch(
  //       "https://jsonplaceholder.typicode.com/users/1"
  //     );
  //     setUser(data);
  //   } catch {
  //     setError(true);
  //   }
  //   setLoading(false)
  // };

  return (

    <div className="container">
        <h2 role="h2">LOGIN FORM</h2>
      <span className="user">{user.name}</span>
      <form>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button disabled={!username || !password} data-testid="button">  
         {/* onClick={handleClick}> */}
          {loading ? "please wait" : "Login"}
        </button>
        <span
          data-testid="error"
          style={{ visibility: error ? "visible" : "hidden" }}
        >
          Something went wrong!
        </span>
      </form>
    </div>
  );
};

export default Login;