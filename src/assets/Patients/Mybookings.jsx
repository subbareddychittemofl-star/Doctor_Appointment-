import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function MyBookings() {
  const navigateTo = useNavigate();

  const appointmetlist = useSelector(
    (state) => state.doctorlist.appointmentlist,
  );
  console.log(appointmetlist);
  const username = appointmetlist.filter(
    (pro, ind) => pro.username == localStorage.getItem("name"),
  );
  console.log(username);
  // Get appointments belonging to the logged-in patient

  // Logout
  const logout = () => {
    localStorage.removeItem("name");
    localStorage.removeItem("username");
    navigateTo("/");
  };

  // Display appointment status
  const getStatus = (status) => {
    switch (status) {
      case "Confirmed":
        return "bg-success";

      case "Rejected":
        return "bg-danger";

      case "Booked":
        return "bg-warning text-dark";

      default:
        return "bg-secondary";
    }
  };

  return (
    <div className="bg-light min-vh-100">
      {/* Navbar */}
      <nav className="navbar bg-white shadow-sm">
        <div className="container py-2">
          <a
            href="/patients"
            className="navbar-brand fw-bold text-primary fs-3"
          >
            DoctorCare
          </a>

          <div className="d-flex gap-2">
            <button
              className="btn btn-primary rounded-pill px-3"
              onClick={() => navigateTo("/patient")}
            >
              <i className="bi bi-arrow-left me-2"></i>
              Doctors
            </button>

            <button
              className="btn btn-danger rounded-pill px-3"
              onClick={logout}
            >
              Logout
            </button>
          </div>
        </div>
      </nav>

      {/* Page Heading */}
      <section className="container py-5">
        <div className="mb-4">
          <span className="text-primary fw-semibold">PATIENT DASHBOARD</span>

          <h1 className="fw-bold mt-2">My Appointments</h1>

          <p className="text-secondary">
            View your bookings and check your appointment status.
          </p>
        </div>

        {/* Booking Count */}
        <div className="row g-3 mb-4">
          <div className="col-md-4">
            <div className="card border-0 shadow-sm rounded-4">
              <div className="card-body p-4">
                <p className="text-secondary mb-2">Total Appointments</p>

                <h2 className="fw-bold text-primary mb-0">
                  {username.length}
                </h2>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card border-0 shadow-sm rounded-4">
              <div className="card-body p-4">
                <p className="text-secondary mb-2">Confirmed</p>

                <h2 className="fw-bold text-success mb-0">
                  {
                    username.filter((item) => item.status === "Confirmed")
                      .length
                  }
                </h2>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card border-0 shadow-sm rounded-4">
              <div className="card-body p-4">
                <p className="text-secondary mb-2">Pending</p>

                <h2 className="fw-bold text-warning mb-0">
                  {username.filter((item) => item.status === "Booked").length}
                </h2>
              </div>
            </div>
          </div>
        </div>

        {/* Appointments List */}
        <div className="card border-0 shadow-sm rounded-4">
          <div className="card-header bg-white border-0 p-4">
            <h5 className="fw-bold mb-0">Booking History</h5>
          </div>

          <div className="card-body p-4">
            {username.length === 0 ? (
              <div className="text-center py-5">
                <i className="bi bi-calendar-x text-primary display-4"></i>

                <h4 className="fw-bold mt-3">No appointments yet</h4>

                <p className="text-secondary">
                  Book an appointment with one of our doctors.
                </p>

                <button
                  className="btn btn-primary rounded-pill px-4"
                  onClick={() => navigateTo("/patients")}
                >
                  Find a Doctor
                </button>
              </div>
            ) : (
              <div className="table-responsive">
                <table className="table align-middle">
                  <thead className="table-light">
                    <tr>
                      <th>Doctor</th>
                      <th>Specialization</th>
                      <th>Date</th>
                      <th>Time</th>
                      <th>Fee</th>
                      <th>Status</th>
                    </tr>
                  </thead>

                  <tbody>
                    {username.map((booking) => (
                      <tr key={booking.id}>
                        <td className="fw-semibold">{booking.doctorName}</td>

                        <td>{booking.specialization}</td>

                        <td>{booking.date}</td>

                        <td>{booking.time}</td>

                        <td className="fw-semibold">₹{booking.fee}</td>

                        <td>
                          <span
                            className={`badge ${getStatus(
                              booking.status,
                            )} rounded-pill px-3 py-2`}
                          >
                            {booking.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
