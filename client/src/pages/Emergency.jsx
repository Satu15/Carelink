export default function Emergency() {
  const Item = ({ title, desc, number, note }) => (
    <div className="bg-white rounded-xl p-6 mb-6 border shadow-sm hover:scale-[1.01] transition">
      <h3 className="font-semibold text-xl text-red-700">{title}</h3>

      <p className="text-sm text-gray-700 mt-2">
        {desc}
      </p>

      <p className="text-sm text-gray-600 mt-2">
        {note}
      </p>

      <span className="inline-block mt-4 px-4 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">
        📞 {number}
      </span>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#f4f7f6] animate-fadeIn">
      <div className="max-w-4xl mx-auto p-6">

        {/* HEADER */}
        <div className="mb-8 bg-red-50 border border-red-200 rounded-xl p-6">
          <h2 className="text-2xl font-bold text-red-700">
            🚨 Emergency Contacts
          </h2>
          <p className="text-red-700 mt-2">
            In medical or safety emergencies, every second matters. This page provides
            quick access to important emergency contact numbers that can save lives.
          </p>
        </div>

        {/* CONTACTS */}
        <Item
          title="Emergency Services"
          desc="Unified emergency number for police, fire, and ambulance services."
          note="Use this number in case of accidents, fires, or immediate danger."
          number="112"
        />

        <Item
          title="Mental Health Crisis Helpline"
          desc="24/7 support for individuals facing emotional distress or mental health crises."
          note="Confidential and free support provided by trained professionals."
          number="988"
        />

        <Item
          title="Women’s Safety Helpline"
          desc="Emergency support service for women in distress."
          note="Available 24/7 for reporting abuse, harassment, or unsafe situations."
          number="181"
        />

        <Item
          title="Hospital Emergency Desk"
          desc="Direct contact to the nearest government hospital emergency ward."
          note="For urgent medical assistance and hospital admissions."
          number="+91 90000 33333"
        />
      </div>
    </div>
  );
}
