// src/layout/MainLayout.jsx
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Footer";
import Header from "../Pages/Header";

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Content */}
      <main className="flex-1 p-6 bg-gray-50">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
