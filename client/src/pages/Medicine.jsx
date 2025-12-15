import { useState } from "react";

export default function Medicine() {
  const [meds, setMeds] = useState([
    { id: 1, name: "Aspirin", dose: "100mg • Daily", time: "8:00 AM", taken: false },
    { id: 2, name: "Vitamin D", dose: "1000 IU • Daily", time: "9:00 AM", taken: true },
    { id: 3, name: "BP Medicine", dose: "50mg • Daily", time: "2:00 PM", taken: false },
  ]);

  const [form, setForm] = useState({ name: "", dose: "", time: "" });

  const toggleTaken = (id) => {
    setMeds(
      meds.map((m) =>
        m.id === id ? { ...m, taken: !m.taken } : m
      )
    );
  };

  const removeMed = (id) => {
    setMeds(meds.filter((m) => m.id !== id));
  };

  const addMed = () => {
    if (!form.name || !form.time) return;

    setMeds([
      ...meds,
      {
        id: Date.now(),
        name: form.name,
        dose: form.dose || "As prescribed",
        time: form.time,
        taken: false,
      },
    ]);

    setForm({ name: "", dose: "", time: "" });
  };

  return (
    <div className="min-h-screen bg-[#f4f7f6] animate-fadeIn">
      <div className="max-w-4xl mx-auto p-6">

        {/* HEADER */}
        <div className="mb-8 bg-green-50 border border-green-200 rounded-xl p-6">
          <h2 className="text-2xl font-bold text-green-700">
            💊 Medicine Reminder
          </h2>
          <p className="text-green-700 mt-2">
            Track your daily medications, mark them as taken, and add new tablets anytime.
          </p>
        </div>

        {/* ADD MEDICINE */}
        <div className="bg-white border rounded-xl p-6 mb-8 shadow-sm">
          <h3 className="font-semibold mb-4 text-gray-700">
            ➕ Add New Medicine
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="Medicine name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="border rounded-lg p-2"
            />

            <input
              type="text"
              placeholder="Dosage (optional)"
              value={form.dose}
              onChange={(e) => setForm({ ...form, dose: e.target.value })}
              className="border rounded-lg p-2"
            />

            <input
              type="time"
              value={form.time}
              onChange={(e) => setForm({ ...form, time: e.target.value })}
              className="border rounded-lg p-2"
            />
          </div>

          <button
            onClick={addMed}
            className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
          >
            Add Medicine
          </button>
        </div>

        {/* MEDICINE LIST */}
        {meds.map((med) => (
          <div
            key={med.id}
            className={`bg-white rounded-xl p-5 mb-4 border shadow-sm flex justify-between items-center
            hover:scale-[1.01] transition ${
              med.taken ? "bg-green-50 border-green-300" : ""
            }`}
          >
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={med.taken}
                onChange={() => toggleTaken(med.id)}
                className="w-5 h-5 accent-green-600"
              />

              <div>
                <h3 className="font-semibold">{med.name}</h3>
                <p className="text-sm text-gray-600">{med.dose}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-sm bg-teal-100 text-teal-700 px-3 py-1 rounded-full">
                ⏰ {med.time}
              </span>

              <button
                onClick={() => removeMed(med.id)}
                className="text-sm text-red-600 hover:underline"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
