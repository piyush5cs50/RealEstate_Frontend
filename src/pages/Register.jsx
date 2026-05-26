import { useState } from "react";
import API from "../services/api";

function Register() {

  const [formData, setFormData] = useState({
    name: "",
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
        "/auth/register",
        formData
      );

      alert(response.data.message);

      console.log(response.data);

    } catch (error) {

      alert(
        error.response?.data?.message || "Register Failed"
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
              Register
            </h2>

            <form onSubmit={handleSubmit}>

              <div className="mb-3">
                <label>Name</label>

                <input
                  type="text"
                  className="form-control"
                  name="name"
                  onChange={handleChange}
                  required
                />
              </div>

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
                className="btn btn-primary w-100"
              >
                Register
              </button>

            </form>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Register;