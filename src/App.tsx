import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import KenyanNews from "./pages/KenyanNews";
import News from "./pages/News";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

// Category pages
import Politics from "./pages/categories/Politics";
import Business from "./pages/categories/Business";
import Sports from "./pages/categories/Sports";
import Entertainment from "./pages/categories/Entertainment";
import Technology from "./pages/categories/Technology";
import Health from "./pages/categories/Health";

import { Menu, X } from "lucide-react";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);
  const toggleCollapse = () => setSidebarCollapsed(!sidebarCollapsed);

  return (
    <div className="flex min-h-screen">
      {/* Stars */}
      {[...Array(50)].map((_, i) => (
        <div key={i} className="star" />
      ))}

      {/* Sidebar */}
      <Sidebar
        isOpen={sidebarOpen}
        onClose={closeSidebar}
        isCollapsed={sidebarCollapsed}
        toggleCollapse={toggleCollapse}
      />

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-4 py-3 shadow-lg">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <h1 className="font-bold text-xl">📰 NewsApp</h1>
            <nav className="hidden md:flex gap-6">
              <a href="/" className="hover:text-blue-200 transition">Home</a>
              <a href="/kenya" className="hover:text-blue-200 transition">Kenya News</a>
              <a href="/world" className="hover:text-blue-200 transition">World News</a>
              <a href="/about" className="hover:text-blue-200 transition">About</a>
            </nav>
            <button onClick={toggleSidebar} className="md:hidden">
              {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-4 md:p-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/kenya" element={<KenyanNews />} />
            <Route path="/world" element={<News />} />
            {/* Category Routes */}
            <Route path="/category/politics" element={<Politics />} />
            <Route path="/category/business" element={<Business />} />
            <Route path="/category/sports" element={<Sports />} />
            <Route path="/category/entertainment" element={<Entertainment />} />
            <Route path="/category/technology" element={<Technology />} />
            <Route path="/category/health" element={<Health />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default App;