import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const Home = () => (
  <div className="p-10 text-center">
    <h1 className="text-4xl font-bold">Prose</h1>
    <p className="mt-4 text-lg">A brand housing Patisserie & Café, Essentials, and Pixels.</p>
    <div className="mt-6 flex justify-center space-x-4">
      <Link to="/patisserie">Patisserie & Café</Link>
      <Link to="/essentials">Prose Essentials</Link>
      <Link to="/pixels">Prose & Pixels</Link>
    </div>
  </div>
);

const Patisserie = () => (
  <div className="p-10">
    <h2 className="text-3xl font-semibold">Prose Patisserie & Café</h2>
    <p className="mt-4">A village café known for community-driven events and great food.</p>
  </div>
);

const Essentials = () => (
  <div className="p-10">
    <h2 className="text-3xl font-semibold">Prose Essentials</h2>
    <p className="mt-4">A corporate gifting company collaborating with talented artists and designers.</p>
  </div>
);

const Pixels = () => (
  <div className="p-10">
    <h2 className="text-3xl font-semibold">Prose and Pixels</h2>
    <p className="mt-4">A film production company making creative and commercial films.</p>
  </div>
);

const Contact = () => (
  <div className="p-10">
    <h2 className="text-3xl font-semibold">Contact Us</h2>
    <form className="mt-6 flex flex-col space-y-4">
      <input type="text" placeholder="Your Name" className="border p-2 rounded" />
      <input type="email" placeholder="Your Email" className="border p-2 rounded" />
      <textarea placeholder="Your Message" className="border p-2 rounded" rows="4"></textarea>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Send Message</button>
    </form>
  </div>
);

const App = () => (
  <Router>
    <div className="min-h-screen bg-gray-100">
      <nav className="p-4 bg-white shadow-md flex justify-center space-x-6">
        <Link to="/" className="text-lg font-medium">Home</Link>
        <Link to="/patisserie" className="text-lg font-medium">Patisserie</Link>
        <Link to="/essentials" className="text-lg font-medium">Essentials</Link>
        <Link to="/pixels" className="text-lg font-medium">Pixels</Link>
        <Link to="/contact" className="text-lg font-medium">Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/patisserie" element={<Patisserie />} />
        <Route path="/essentials" element={<Essentials />} />
        <Route path="/pixels" element={<Pixels />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  </Router>
);

export default App;
