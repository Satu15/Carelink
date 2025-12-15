
import {
  Droplet,
  PlusSquare,
  Pill,
  AlertTriangle,
  ChevronRight,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0e1111] text-white px-6 md:px-16 py-10">
      
      {/* HEADER */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-teal-400">
          Community Health Hub
        </h1>
        <p className="text-gray-400 mt-2">
          Your trusted partner for community healthcare
        </p>
      </div>

      {/* CARDS */}
      <div className="flex flex-col gap-6">

        {/* BLOOD DONOR */}
        <Card
          icon={<Droplet className="text-red-400" />}
          title="Blood Donor Availability"
          desc="Find blood donors in your area instantly"
          border="border-red-500/40"
        />

        {/* CLINICS */}
        <Card
          icon={<PlusSquare className="text-teal-400" />}
          title="Clinics & Health Camps"
          desc="Discover nearby health facilities and camps"
          border="border-teal-500/40"
        />

        {/* MEDICINE */}
        <Card
          icon={<Pill className="text-green-400" />}
          title="Medicine Reminder"
          desc="Never miss your medication schedule"
          border="border-green-500/40"
        />

        {/* EMERGENCY */}
        <Card
          icon={<AlertTriangle className="text-red-400" />}
          title="Emergency Contacts"
          desc="Quick access to emergency services"
          border="border-red-500/40"
        />

      </div>
    </div>
  );
}

/* CARD COMPONENT */
function Card({ icon, title, desc, border }) {
  return (
    <div
      className={`flex items-center justify-between rounded-2xl p-6 
      bg-white/5 backdrop-blur-xl border ${border}
      hover:bg-white/10 transition`}
    >
      <div className="flex items-center gap-5">
        <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
          {icon}
        </div>

        <div>
          <h2 className="text-lg font-semibold">{title}</h2>
          <p className="text-gray-400 text-sm mt-1">{desc}</p>
        </div>
      </div>

      <ChevronRight className="text-gray-500" />
    </div>
  );
}
