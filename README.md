# Doctor Appointment App

This project is a front-end React application for a doctor appointment booking system. It allows patients to browse doctors, book appointments, and track their booking status, while doctors can log in and review or update patient appointment requests.

## Overview

The app is built with React and Vite as a lightweight SPA. It uses Redux Toolkit for managing the doctor list and appointment data in memory, and React Router for navigation between pages. The project includes a landing page, login flow, doctor dashboard, patient dashboard, and appointment booking modal.

## Main Features

- Landing page with a hero section and doctor showcase
- Search by specialization on the landing page
- Login flow that redirects users based on whether the entered username matches a doctor profile
- Patient dashboard for browsing doctors and booking appointments
- Appointment modal with fields for patient name, date, and time
- My Bookings page showing booking history and status
- Doctor dashboard for confirming or rejecting booked appointments
- Status tracking: Booked, Confirmed, Rejected
- Bootstrap styling for fast UI development

## Technology Stack

- React 19
- Vite 8
- Redux Toolkit
- React Router DOM
- Bootstrap 5
- ESLint + React Hooks plugin

## Project Structure

```text
doctor_appoinment/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/
│   │   └── Patients/
│   │       ├── Mybookings.jsx
│   │       └── Patients.jsx
│   ├── Doctors/
│   │   └── Doctorpage.jsx
│   ├── Remaining.jsx/
│   │   ├── Landing_page.jsx
│   │   ├── Login.jsx
│   │   └── Navbar.jsx
│   ├── Stores/
│   │   ├── DoctorlistSlice.jsx
│   │   └── Store.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
├── vite.config.js
└── node_modules/ (generated after install)
```

## Key Files

### Root files

- `package.json`: project scripts and dependencies
- `vite.config.js`: Vite configuration
- `eslint.config.js`: linting configuration
- `index.html`: root HTML entry point

### Application entry files

- `src/main.jsx`: bootstraps the React app and wraps it in Redux Provider
- `src/App.jsx`: configures the application routes

### State management

- `src/Stores/Store.jsx`: creates the Redux store
- `src/Stores/DoctorlistSlice.jsx`: holds the doctor list and appointment records, plus reducers for booking and status updates

### Pages and screens

- `src/Remaining.jsx/Landing_page.jsx`: home page with doctor cards and search box
- `src/Remaining.jsx/Login.jsx`: login form and redirect logic
- `src/Doctors/Doctorpage.jsx`: doctor dashboard for managing appointments
- `src/assets/Patients/Patients.jsx`: patient dashboard to browse doctors and book appointments
- `src/assets/Patients/Mybookings.jsx`: user booking history page

## How the App Works

1. The app loads with a Redux store containing a mock list of doctors and an empty appointments list.
2. On the landing page, users can view doctors and search by specialization.
3. The login page checks whether the entered username matches a known doctor name.
   - Matching doctor name => redirect to the doctor dashboard
   - Otherwise => redirect to the patient dashboard
4. Patients can open a booking modal, choose a date and time, and create an appointment.
5. Appointments are stored in Redux state and display in the patient booking history.
6. Doctors can view their assigned patient appointments and confirm or reject them.

## Setup and Run

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Notes

- This project currently uses a front-end-only flow with mock data and in-memory state.
- Data is not persisted to a backend or database; it is stored in Redux state and browser `localStorage`.
- The project demonstrates a complete UI flow for a clinic appointment booking app and is suitable as a frontend demo or starter project.

## License

This project does not currently include a license file. If you plan to share or publish it, add an appropriate license before distribution.

