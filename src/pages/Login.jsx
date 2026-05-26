import { useState } from "react";
import API from "../services/api";

function Login() {

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const response = await API.post(
        "/auth/login",
        formData
      );

      // Save token
      localStorage.setItem(
        "token",
        response.data.token
      );

      alert(response.data.message);

      console.log(response.data);

    } catch (error) {

      alert(
        error.response?.data?.message || "Login Failed"
      );

      console.log(error);

    }
  };

  return (
    <div className="container mt-5">

      <div className="row justify-content-center">

        <div className="col-md-5">

          <div className="card shadow p-4">

            <h2 className="text-center mb-4">
              Login
            </h2>

            <form onSubmit={handleSubmit}>

              <div className="mb-3">
                <label>Email</label>

                <input
                  type="email"
                  className="form-control"
                  name="email"
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label>Password</label>

                <input
                  type="password"
                  className="form-control"
                  name="password"
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                type="submit"
                className="btn btn-success w-100"
              >
                Login
              </button>

            </form>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Login;