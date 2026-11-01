import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function App() {
  const [search, setSearch] = useState("");
  const navigateto = useNavigate();
  const dispatch = useDispatch();
  const filteredDoctors = useSelector((state) => state.doctorlist.doctorlist);

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container">
          <a className="navbar-brand fw-bold text-primary" href="#">
            DoctorCare
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarMenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarMenu">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#doctors">
                  Doctors
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li>
                <button
                  className="btn btn-danger"
                  onClick={() => navigateto("login")}
                >
                  Login
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-light py-5">
        <div className="container py-4">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="display-5 fw-bold">
                Your Health, <span className="text-primary">Our Priority</span>
              </h1>

              <p className="text-secondary fs-5 mt-3">
                Find experienced doctors and book your appointment easily. Your
                health deserves the best care.
              </p>

              <a href="#doctors" className="btn btn-primary btn-lg mt-3">
                Find a Doctor
              </a>
            </div>

            <div className="col-lg-6 text-center mt-4 mt-lg-0">
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d"
                alt="Doctor consulting a patient"
                className="img-fluid rounded-4"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section id="doctors" className="container py-5">
        <div className="text-center mb-4">
          <h2 className="fw-bold">Our Doctors</h2>
          <p className="text-secondary">
            Find the right specialist for your health.
          </p>
        </div>

        {/* Search Bar */}
        <div className="row justify-content-center mb-4">
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Search by specialization..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        {/* Doctor Cards */}
        <div className="row g-4">
          {filteredDoctors.length > 0 ? (
            filteredDoctors.map((doctor) => (
              <div className="col-md-6 col-lg-4" key={doctor.id}>
                <div className="card h-100 shadow-sm border-0">
                  <img
                    src={doctor.image}
                    className="card-img-top"
                    alt={doctor.name}
                    style={{ height: "250px", objectFit: "cover" }}
                  />

                  <div className="card-body">
                    <h5 className="card-title fw-bold">{doctor.name}</h5>

                    <p className="text-primary mb-1">{doctor.specialist}</p>

                    <p className="text-secondary">{doctor.experience}</p>

                    <h5>₹{doctor.fee} / consultation</h5>

                    <button
                      className="btn btn-primary w-100 mt-3"
                      onClick={() => alert("Please Login")}
                    >
                      Book Appointment
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-secondary">No doctors found.</p>
          )}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-light py-5">
        <div className="container text-center">
          <h2 className="fw-bold">Why Choose DoctorCare?</h2>

          <p className="text-secondary mt-3">
            We make it easy to find trusted doctors and schedule appointments at
            your convenience.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3">
        <p className="mb-0">© 2026 DoctorCare. All rights reserved.</p>
      </footer>
    </>
  );
}
