// src/app/components/Header.js

const Header = () => {
  return (
    <header className="bg-teal-500 text-white p-4 flex justify-between items-center">
      {/* Logo S-MoniCom */}
      <div className="flex items-center">
        <div className="w-10 h-10 bg-gray-300 rounded-full flex justify-center items-center">
          <span className="font-bold text-xl">S-MoniCom</span>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="flex space-x-6 text-lg font-semibold">
        <a href="#home" className="hover:underline">
          Home
        </a>
        <a href="#about" className="hover:underline">
          About
        </a>
        <a href="#services" className="hover:underline">
          Layanan
        </a>
        <a href="#usage" className="hover:underline">
          Penggunaan
        </a>
      </nav>

      {/* Get Started Button */}
      <a href="#get-started" className="bg-blue-700 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-800">
        Get Started
      </a>
    </header>
  );
};

export default Header;
