import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const navigateto = useNavigate();
  const doctors = useSelector((state) => state.doctorlist.doctorlist);

  console.log(username);
  console.log(password);
  const login = (e) => {
    console.log("login");
    e.preventDefault();
    var doctor = doctors.find((pro) => pro.name == username);
    if (doctor) {
      navigateto("/doctor");
      localStorage.setItem("name", doctor.name);
    } else {
      navigateto("/patient");
      localStorage.setItem("name", username);
    }
  };

  return (
    <div className="min-vh-100 bg-light d-flex align-items-center justify-content-center py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4">
            <div className="card border-0 shadow-sm rounded-4">
              <div className="card-body p-4 p-md-5">
                {/* Logo */}
                <div className="text-center mb-4">
                  <Link
                    to="/"
                    className="text-primary fw-bold fs-3 text-decoration-none"
                  >
                    DoctorCare
                  </Link>

                  <h4 className="fw-bold mt-3">Welcome Back!</h4>

                  <p className="text-secondary">
                    Login to book your doctor appointment
                  </p>
                </div>

                {/* Login Form */}
                <form onSubmit={login}>
                  <div className="mb-3">
                    <label className="form-label fw-medium">Username</label>

                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Enter your email"
                      required
                      onChange={(e) => setusername(e.target.value)}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-medium">Password</label>

                    <div className="input-group">
                      <input
                        type={showPassword ? "text" : "password"}
                        className="form-control form-control-lg"
                        placeholder="Enter your password"
                        required
                        onChange={(e) => setpassword(e.target.value)}
                      />

                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? "Hide" : "Show"}
                      </button>
                    </div>
                  </div>

                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="remember"
                      />

                      <label
                        className="form-check-label text-secondary"
                        htmlFor="remember"
                      >
                        Remember me
                      </label>
                    </div>

                    <Link
                      to="/forgot-password"
                      className="text-primary text-decoration-none small"
                    >
                      Forgot password?
                    </Link>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary btn-lg w-100"
                  >
                    Login
                  </button>
                </form>

                {/* Register Link */}
                <div className="text-center mt-4">
                  <p className="text-secondary mb-0">
                    Don't have an account?{" "}
                    <Link
                      to="/register"
                      className="text-primary fw-semibold text-decoration-none"
                    >
                      Register
                    </Link>
                  </p>
                </div>
              </div>
            </div>

            <p className="text-center text-secondary small mt-4">
              Your health, our priority.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
