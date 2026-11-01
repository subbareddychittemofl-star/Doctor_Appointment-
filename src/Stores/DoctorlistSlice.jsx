import { createSlice } from "@reduxjs/toolkit";

const DoctorlistSlice = createSlice({
  name: "doctorlist",
  initialState: {
    doctorlist: [
      {
        id: 1,
        name: "Dr. Rahul Sharma",
        specialization: "Cardiologist",
        experience: 10,
        fee: 500,
        qualification: "MBBS, MD Cardiology",
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d",
      },
      {
        id: 2,
        name: "Dr. Priya Reddy",
        specialization: "Dermatologist",
        experience: 8,
        fee: 400,
        qualification: "MBBS, MD Dermatology",
        image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2",
      },
      {
        id: 3,
        name: "Dr. Arjun Kumar",
        specialization: "Dentist",
        experience: 6,
        fee: 300,
        qualification: "BDS, MDS",
        image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d",
      },
      {
        id: 4,
        name: "Dr. Ananya Rao",
        specialization: "Neurologist",
        experience: 12,
        fee: 700,
        qualification: "MBBS, MD Neurology",
        image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f",
      },
      {
        id: 5,
        name: "Dr. Vikram Singh",
        specialization: "Orthopedic",
        experience: 9,
        fee: 600,
        qualification: "MBBS, MS Orthopedics",
        image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54",
      },
      {
        id: 6,
        name: "Dr. Sneha Patel",
        specialization: "Pediatrician",
        experience: 7,
        fee: 450,
        qualification: "MBBS, MD Pediatrics",
        image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f",
      },
      {
        id: 7,
        name: "Dr. Karthik Reddy",
        specialization: "General Physician",
        experience: 5,
        fee: 250,
        qualification: "MBBS",
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d",
      },
      {
        id: 8,
        name: "Dr. Meera Nair",
        specialization: "Gynecologist",
        experience: 11,
        fee: 550,
        qualification: "MBBS, MS Obstetrics and Gynecology",
        image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2",
      },
      {
        id: 9,
        name: "Dr. Suresh Kumar",
        specialization: "Ophthalmologist",
        experience: 8,
        fee: 400,
        qualification: "MBBS, MS Ophthalmology",
        image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d",
      },
      {
        id: 10,
        name: "Dr. Divya Sharma",
        specialization: "Psychiatrist",
        experience: 6,
        fee: 500,
        qualification: "MBBS, MD Psychiatry",
        image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f",
      },
    ],
    appointmentlist: [],
  },
  reducers: {
    appointment: (state, action) => {
      alert("entered into the appoinment list in the store");
      console.log("entered into the appoinment list in the store");
      state.appointmentlist.push(action.payload);
    },
    updateAppointmentStatus: (state, action) => {
      const { id, status } = action.payload;

      const foundAppointment = state.appointmentlist.find(
        (item) => item.id === id,
      );

      if (foundAppointment) {
        foundAppointment.status = status;
      }
    },
  },
});
export const { appointment, updateAppointmentStatus } = DoctorlistSlice.actions;
export default DoctorlistSlice.reducer;
