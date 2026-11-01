import { useDispatch, useSelector } from "react-redux";
import { updateAppointmentStatus } from "../Stores/DoctorlistSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Doctors() {
  const drname = localStorage.getItem("name");
  const dispatch = useDispatch();
  const navigateto = useNavigate();
  const list = useSelector((state) => state.doctorlist.doctorlist);
  const appointments = useSelector((state) => state.doctorlist.appointmentlist);
  useEffect(() => {
    if (!localStorage.getItem("name")) {
      navigateto("/");
    }
  }, [navigateto]);
  var logout = () => {
    localStorage.removeItem("name");
    navigateto("/");
  };
  // Show only appointments for the logged-in doctor
  const doctorAppointments = appointments.filter(
    (item) => item.doctorName === drname,
  );
  const changeStatus = (appointmentId, status) => {
    dispatch(
      updateAppointmentStatus({
        id: appointmentId,
        status,
      }),
    );
  };
  return (
    <>
      <div className="bg-light min-vh-100 py-5">
        <div className="container">
          <div className="d-flex flex-wrap justify-content-between align-items-center mb-4">
            <div>
              <p className="text-primary fw-semibold mb-1">Doctor Dashboard</p>
              <h1 className="fw-bold mb-1">Welcome, {drname || "Doctor"}</h1>
              <p className="text-secondary mb-0">
                Review and manage your patient appointments.
              </p>
            </div>
            <div className="d-flex align-items-center gap-3 mt-3 mt-md-0">
              <span className="badge bg-primary rounded-pill fs-6">
                {doctorAppointments.length} Appointments
              </span>

              <button className="btn btn-danger" onClick={logout}>
                Logout
              </button>
            </div>
          </div>

          {doctorAppointments.length === 0 ? (
            <div className="card border-0 shadow-sm rounded-4">
              <div className="card-body text-center py-5">
                <h4 className="fw-bold">No appointments yet</h4>
                <p className="text-secondary mb-0">
                  New patient appointments will appear here.
                </p>
              </div>
            </div>
          ) : (
            <div className="row g-4">
              {doctorAppointments.map((item) => (
                <div className="col-12 col-lg-6" key={item.id}>
                  <div className="card h-100 border-0 shadow-sm rounded-4">
                    <div className="card-body p-4">
                      <div className="d-flex justify-content-between align-items-start gap-3 mb-3">
                        <div>
                          <h5 className="fw-bold mb-1">{item.username}</h5>
                          <p className="text-secondary mb-0">
                            {item.specialization}
                          </p>
                        </div>

                        <span
                          className={`badge ${
                            item.status === "Confirmed"
                              ? "bg-success"
                              : item.status === "Rejected"
                                ? "bg-danger"
                                : "bg-warning text-dark"
                          }`}
                        >
                          {item.status}
                        </span>
                      </div>

                      <div className="row g-3 mb-4">
                        <div className="col-sm-6">
                          <p className="text-secondary small mb-1">
                            Appointment Date
                          </p>
                          <p className="fw-semibold mb-0">{item.date}</p>
                        </div>

                        <div className="col-sm-6">
                          <p className="text-secondary small mb-1">
                            Appointment Time
                          </p>
                          <p className="fw-semibold mb-0">{item.time}</p>
                        </div>

                        <div className="col-sm-6">
                          <p className="text-secondary small mb-1">
                            Consultation Fee
                          </p>
                          <p className="fw-semibold mb-0">₹{item.fee}</p>
                        </div>
                      </div>

                      {item.status === "Booked" ? (
                        <div className="d-flex flex-wrap gap-2">
                          <button
                            className="btn btn-success"
                            onClick={() => changeStatus(item.id, "Confirmed")}
                          >
                            Confirm Appointment
                          </button>

                          <button
                            className="btn btn-outline-danger"
                            onClick={() => changeStatus(item.id, "Rejected")}
                          >
                            Reject
                          </button>
                        </div>
                      ) : (
                        <p className="text-secondary small mb-0">
                          This appointment has been {item.status.toLowerCase()}.
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
