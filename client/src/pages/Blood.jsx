export default function Blood() {
  const Camp = ({ name, organizer, place, date, time, contact, note }) => (
    <div className="bg-white rounded-xl p-6 mb-6 border shadow-sm hover:scale-[1.01] transition">
      <h3 className="font-semibold text-xl text-red-700">{name}</h3>

      <p className="text-sm text-gray-700 mt-2">
        <strong>Organized by:</strong> {organizer}
      </p>

      <p className="text-sm text-gray-600 mt-2">
        {note}
      </p>

      <div className="mt-4 space-y-1 text-sm text-gray-600">
        <p>📍 <strong>Location:</strong> {place}</p>
        <p>📅 <strong>Date:</strong> {date}</p>
        <p>⏰ <strong>Time:</strong> {time}</p>
        <p>📞 <strong>Contact:</strong> {contact}</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#f4f7f6] animate-fadeIn">
      <div className="max-w-4xl mx-auto p-6">

        {/* HEADER */}
        <div className="mb-8 bg-red-50 border border-red-200 rounded-xl p-6">
          <h2 className="text-2xl font-bold text-red-700">
            🩸 Blood Donation Camps
          </h2>
          <p className="text-red-700 mt-2">
            Many people are willing to donate blood but are unaware of where donation
            camps are happening. Carelink helps bridge this gap by listing nearby blood
            donation camps with complete details.
          </p>
        </div>

        {/* CAMPS */}
        <Camp
          name="Red Cross Blood Donation Drive"
          organizer="Indian Red Cross Society"
          note="Open for all healthy donors aged 18–60. Please carry a valid ID proof."
          place="City Community Hall, MG Road"
          date="16 December 2025"
          time="9:00 AM – 3:00 PM"
          contact="+91 98765 43210"
        />

        <Camp
          name="Government Hospital Emergency Blood Camp"
          organizer="District Government Hospital"
          note="Special emergency camp to support accident and surgery patients."
          place="District Hospital Campus"
          date="17 December 2025"
          time="10:00 AM – 4:00 PM"
          contact="+91 91234 56789"
        />

        <Camp
          name="College NSS Blood Donation Camp"
          organizer="ABC Engineering College – NSS Unit"
          note="Voluntary blood donation camp for students and local residents."
          place="College Auditorium, ABC College"
          date="18 December 2025"
          time="8:30 AM – 2:00 PM"
          contact="+91 99887 77665"
        />
      </div>
    </div>
  );
}
