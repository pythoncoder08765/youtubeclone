import axios from "axios";

function LoginComponent() {
  async function onLogin() {
    const emailField = document.getElementById("email");
    const passwordField = document.getElementById("password");
    const email = emailField.value;
    const password = passwordField.value;
    const res = await axios.post("localhost:3000/login", {
      email: email,
      password: password,
    });
    const token = res.data.token;
    localStorage.setItem("token", token);
  }

  return (
    <form>
      <div className="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input
          type="email"
          className="form-control"
          id="email"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
        <small id="emailHelp" className="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>
      <div className="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input
          type="password"
          className="form-control"
          id="passsword"
          placeholder="Password"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default LoginComponent;
