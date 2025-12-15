export default function Profile() {
  const user = {
    name: "John Doe",
    email: "john@gmail.com",
    age: 20,
    bloodGroup: "O+",
    location: "Bengaluru, India",
  };

  const stats = [
    { label: "Medicines Tracked", value: 5 },
    { label: "Appointments Booked", value: 3 },
    { label: "Blood Camps Viewed", value: 6 },
    { label: "Emergency Accessed", value: 2 },
  ];

  return (
    <div className="min-h-screen bg-[#f4f7f6] animate-fadeIn">
      <div className="max-w-4xl mx-auto p-6">

        {/* HEADER */}
        <div className="bg-white border rounded-2xl p-8 shadow-sm mb-8">
          <h1 className="text-2xl font-bold text-teal-700">
            👤 My Health Profile
          </h1>
          <p className="text-gray-600 mt-1">
            View and manage your personal health information
          </p>
        </div>

        {/* USER INFO */}
        <div className="bg-white border rounded-xl p-6 shadow-sm mb-8">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Personal Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Age:</strong> {user.age}</p>
            <p><strong>Blood Group:</strong> {user.bloodGroup}</p>
            <p><strong>Location:</strong> {user.location}</p>
          </div>
        </div>

        {/* HEALTH ACTIVITY STATS */}
        <div className="bg-white border rounded-xl p-6 shadow-sm mb-8">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Health Activity Summary
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-teal-50 border border-teal-200 rounded-xl p-4 text-center"
              >
                <p className="text-2xl font-bold text-teal-700">
                  {stat.value}
                </p>
                <p className="text-sm text-teal-700 mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* QUICK NOTES / MEDICAL INFO */}
        <div className="bg-white border rounded-xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Important Medical Notes
          </h2>

          <ul className="list-disc list-inside text-sm text-gray-600 space-y-2">
            <li>Allergic to Penicillin</li>
            <li>Diabetic (Type 2)</li>
            <li>Emergency contact linked with profile</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
