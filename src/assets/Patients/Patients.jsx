import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { appointment } from "../../Stores/DoctorlistSlice";

export default function Patients() {
  const doctors = useSelector((state) => state.doctorlist.doctorlist);

  const appointmetlist = useSelector(
    (state) => state.doctorlist.appointmentlist,
  );
  const ind = appointmetlist.filter(
    (pro, ind) => pro.username == localStorage.getItem("name"),
  );
  console.log(appointmetlist);
  console.log(ind);
  const dispatch = useDispatch();
  const navigateto = useNavigate();

  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [username, setUsername] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  // Logout
  const logout = () => {
    localStorage.removeItem("name");
    localStorage.removeItem("username");
    navigateto("/");
  };

  // Open booking modal
  const openBookingModal = (doctor) => {
    setSelectedDoctor(doctor);

    const modalElement = document.getElementById("bookingModal");
    const modal = window.bootstrap.Modal.getOrCreateInstance(modalElement);

    modal.show();
  };

  // Book appointment
  const booking = (e) => {
    e.preventDefault();

    if (!selectedDoctor) {
      alert("Please select a doctor");
      return;
    }

    if (!username.trim() || !date || !time) {
      alert("Please fill in all appointment details");
      return;
    }

    dispatch(
      appointment({
        id: username,
        username: localStorage.getItem("name"),
        doctorId: selectedDoctor.id,
        doctorName: selectedDoctor.name,
        specialization: selectedDoctor.specialization,
        date,
        time,
        fee: selectedDoctor.fee,
        status: "Booked",
      }),
    );

    alert("Appointment booked successfully!");

    setSelectedDoctor(null);
    setUsername("");
    setDate("");
    setTime("");

    const modalElement = document.getElementById("bookingModal");

    window.bootstrap.Modal.getOrCreateInstance(modalElement).hide();
  };

  return (
    <div className="bg-light min-vh-100">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg bg-white shadow-sm sticky-top">
        <div className="container py-2">
          <a className="navbar-brand fw-bold text-primary fs-3" href="/">
            <i className="bi bi-heart-pulse-fill me-2"></i>
            DoctorCare
          </a>

          <div className="d-flex align-items-center gap-3">
            <span className="text-secondary d-none d-md-block">
              Welcome, {localStorage.getItem("name")}
            </span>
            <button
              className="btn btn-primary rounded-pill px-3"
              onClick={() => navigateto("/mybookings")}
            >
              <i className="bi bi-calendar-check me-2"></i>
              My Bookings
            </button>

            <button
              type="button"
              className="btn btn-danger rounded-pill px-4"
              onClick={logout}
            >
              <i className="bi bi-box-arrow-right me-2"></i>
              Logout
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-white py-5">
        <div className="container py-lg-5">
          <div className="row align-items-center g-5">
            <div className="col-lg-7">
              <span className="badge bg-primary-subtle text-primary rounded-pill px-3 py-2 mb-4">
                Your Health, Our Priority
              </span>

              <h1 className="display-4 fw-bold lh-sm">
                Find the right doctor.
                <span className="text-primary"> Book with confidence.</span>
              </h1>

              <p className="text-secondary fs-5 mt-4 mb-4">
                Connect with experienced doctors and schedule your appointment
                in just a few simple steps.
              </p>

              <button
                type="button"
                className="btn btn-primary btn-lg rounded-pill px-4"
                onClick={() =>
                  document.getElementById("doctors").scrollIntoView({
                    behavior: "smooth",
                  })
                }
              >
                Explore Doctors
                <i className="bi bi-arrow-right ms-2"></i>
              </button>

              <div className="d-flex flex-wrap gap-4 mt-5">
                <div>
                  <h4 className="fw-bold text-primary mb-1">10+</h4>
                  <small className="text-secondary">Expert Doctors</small>
                </div>

                <div className="border-start ps-4">
                  <h4 className="fw-bold text-primary mb-1">Easy</h4>
                  <small className="text-secondary">Online Booking</small>
                </div>

                <div className="border-start ps-4">
                  <h4 className="fw-bold text-primary mb-1">Trusted</h4>
                  <small className="text-secondary">Healthcare</small>
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="position-relative">
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d"
                  alt="Doctor consulting a patient"
                  className="img-fluid rounded-4 shadow"
                  style={{
                    width: "100%",
                    height: "400px",
                    objectFit: "cover",
                  }}
                />

                <div className="bg-white shadow rounded-4 p-3 position-absolute bottom-0 start-0 m-3">
                  <div className="d-flex align-items-center gap-3">
                    <div className="bg-primary-subtle text-primary rounded-circle p-3">
                      <i className="bi bi-calendar-check fs-4"></i>
                    </div>

                    <div>
                      <h6 className="fw-bold mb-1">Easy Appointments</h6>
                      <small className="text-secondary">
                        Book your visit online
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section id="doctors" className="container py-5">
        <div className="text-center mb-5">
          <span className="text-primary fw-semibold">OUR SPECIALISTS</span>

          <h2 className="fw-bold mt-2">Meet Our Doctors</h2>

          <p className="text-secondary">
            Choose a specialist who understands your needs.
          </p>
        </div>

        <div className="row g-4">
          {doctors.map((doctor) => (
            <div className="col-sm-6 col-lg-4 col-xl-3" key={doctor.id}>
              <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="card-img-top"
                  style={{
                    height: "220px",
                    objectFit: "cover",
                  }}
                />

                <div className="card-body p-4">
                  <span className="badge bg-primary-subtle text-primary mb-3">
                    {doctor.specialization}
                  </span>

                  <h5 className="fw-bold mb-2">{doctor.name}</h5>

                  <p className="text-secondary small mb-2">
                    {doctor.qualification}
                  </p>

                  <p className="text-secondary small mb-3">
                    <i className="bi bi-briefcase me-2"></i>
                    {doctor.experience} years experience
                  </p>

                  <hr />

                  <div className="d-flex justify-content-between align-items-center gap-2">
                    <div>
                      <small className="text-secondary d-block">
                        Consultation Fee
                      </small>

                      <h5 className="fw-bold text-primary mb-0">
                        ₹{doctor.fee}
                      </h5>
                    </div>

                    <button
                      type="button"
                      className="btn btn-primary btn-sm rounded-pill px-3"
                      onClick={() => openBookingModal(doctor)}
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Appointment Booking Modal */}
      <div
        className="modal fade"
        id="bookingModal"
        tabIndex="-1"
        aria-labelledby="bookingModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content rounded-4 border-0 shadow">
            <div className="modal-header border-0 p-4">
              <div>
                <span className="text-primary small fw-semibold">
                  DOCTORCARE APPOINTMENTS
                </span>

                <h3 className="modal-title fw-bold mt-2" id="bookingModalLabel">
                  Book Appointment
                </h3>

                <p className="text-secondary mb-0 mt-1">
                  {selectedDoctor?.name}
                </p>
              </div>

              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body px-4 pb-4">
              <form onSubmit={booking}>
                {/* Patient Username */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Patient Username
                  </label>

                  <input
                    type="text"
                    className="form-control form-control-lg"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter your registered username"
                    required
                  />
                </div>

                {/* Appointment Date */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Appointment Date
                  </label>

                  <input
                    type="date"
                    className="form-control form-control-lg"
                    min={new Date().toISOString().slice(0, 10)}
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                  />
                </div>

                {/* Appointment Time */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Appointment Time
                  </label>

                  <select
                    className="form-select form-select-lg"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    required
                  >
                    <option value="">Select a time</option>
                    <option value="09:00 AM">09:00 AM</option>
                    <option value="10:00 AM">10:00 AM</option>
                    <option value="11:00 AM">11:00 AM</option>
                    <option value="02:00 PM">02:00 PM</option>
                    <option value="03:00 PM">03:00 PM</option>
                    <option value="04:00 PM">04:00 PM</option>
                  </select>
                </div>

                {/* Consultation Fee */}
                <div className="alert alert-primary rounded-3 border-0">
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="fw-semibold">Consultation Fee</span>

                    <strong className="fs-5">₹{selectedDoctor?.fee}</strong>
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-lg w-100 rounded-pill"
                >
                  Confirm Appointment
                  <i className="bi bi-arrow-right ms-2"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
