// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 text-center">
      <p className="text-sm">&copy; {new Date().getFullYear()} MyApp. All rights reserved.</p>
    </footer>
  );
}
