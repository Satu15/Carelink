import { useState } from "react";

export default function Clinics() {
  const [appointments, setAppointments] = useState({});

  const bookSlot = (clinic, slot) => {
    setAppointments({
      ...appointments,
      [clinic]: slot,
    });
  };

  const Clinic = ({ id, name, type, address, phone, slots }) => (
    <div className="bg-white rounded-xl p-6 mb-6 border shadow-sm hover:scale-[1.01] transition">
      <h3 className="font-semibold text-xl text-teal-700">{name}</h3>

      <span className="inline-block text-xs bg-teal-100 text-teal-700 px-2 py-1 rounded-full mt-1">
        {type}
      </span>

      <p className="text-sm text-gray-600 mt-3">📍 {address}</p>
      <p className="text-sm text-gray-600">📞 {phone}</p>

      {/* TIMING SLOTS */}
      <div className="mt-4">
        <p className="text-sm font-semibold text-gray-700 mb-2">
          Available Time Slots
        </p>

        <div className="flex flex-wrap gap-2">
          {slots.map((slot) => (
            <button
              key={slot}
              onClick={() => bookSlot(id, slot)}
              className={`px-3 py-1 rounded-lg text-sm border transition
                ${
                  appointments[id] === slot
                    ? "bg-teal-600 text-white border-teal-600"
                    : "bg-teal-50 text-teal-700 hover:bg-teal-100"
                }`}
            >
              {slot}
            </button>
          ))}
        </div>
      </div>

      {/* APPOINTMENT STATUS */}
      {appointments[id] && (
        <div className="mt-4 bg-green-50 border border-green-200 rounded-lg p-3 text-green-700 text-sm">
          ✅ Appointment booked for <strong>{appointments[id]}</strong>
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-[#f4f7f6] animate-fadeIn">
      <div className="max-w-4xl mx-auto p-6">

        {/* HEADER */}
        <div className="mb-8 bg-teal-50 border border-teal-200 rounded-xl p-6">
          <h2 className="text-2xl font-bold text-teal-700">
            🏥 Clinics & Health Camps
          </h2>
          <p className="text-teal-700 mt-2">
            View nearby clinics, check available timings, and book appointments easily.
          </p>
        </div>

        {/* CLINICS LIST */}
        <Clinic
          id="clinic1"
          name="City Health Clinic"
          type="General Practice"
          address="Main Road, Downtown"
          phone="+91 90000 11111"
          slots={["9:00 AM", "10:30 AM", "12:00 PM", "4:00 PM"]}
        />

        <Clinic
          id="clinic2"
          name="Community Medical Center"
          type="Multi-specialty"
          address="West Avenue, Sector 4"
          phone="+91 90000 22222"
          slots={["10:00 AM", "1:00 PM", "3:00 PM", "6:00 PM"]}
        />

        <Clinic
          id="clinic3"
          name="Family Care Clinic"
          type="Pediatrics & Elder Care"
          address="Green Park Colony"
          phone="+91 90000 33333"
          slots={["9:30 AM", "11:00 AM", "2:00 PM"]}
        />

        <Clinic
          id="clinic4"
          name="Free Community Health Camp"
          type="Health Screening Camp"
          address="Municipal Ground"
          phone="+91 90000 44444"
          slots={["8:00 AM", "9:00 AM", "10:00 AM"]}
        />
      </div>
    </div>
  );
}
