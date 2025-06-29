
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="flex-1 p-6 bg-gray-50">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/patients" element={<Patients />} />
            <Route path="/consultations" element={<Consultations />} />
            <Route path="/appointments" element={<Appointments />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

function Sidebar() {
  const links = [
    { name: "Dashboard", path: "/" },
    { name: "Patients", path: "/patients" },
    { name: "Consultations", path: "/consultations" },
    { name: "Appointments", path: "/appointments" },
    { name: "Settings", path: "/settings" },
  ];

  return (
    <div className="w-64 bg-white shadow-xl p-4">
      <h1 className="text-2xl font-bold mb-6">HealthPlix Web</h1>
      <nav className="flex flex-col space-y-4">
        {links.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className="text-gray-800 hover:text-blue-600"
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Dashboard</h2>
      <p>Welcome to HealthPlix Web. View your recent activities here.</p>
    </div>
  );
}

function Patients() {
  const [patients] = useState([
    { id: 1, name: "John Doe", age: 34 },
    { id: 2, name: "Jane Smith", age: 29 },
  ]);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Patients</h2>
      <ul className="space-y-2">
        {patients.map((p) => (
          <li key={p.id} className="bg-white shadow p-3 rounded-xl">
            {p.name}, Age {p.age}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Consultations() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Consultations</h2>
      <form className="space-y-4">
        <input type="text" placeholder="Patient Name" className="border p-2 w-full rounded" />
        <textarea placeholder="Diagnosis / Notes" className="border p-2 w-full rounded h-32"></textarea>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Save</button>
      </form>
    </div>
  );
}

function Appointments() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Appointments</h2>
      <p>Upcoming appointments will be shown here.</p>
    </div>
  );
}

function Settings() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Settings</h2>
      <p>Manage your profile and preferences.</p>
    </div>
  );
}

export default App;
