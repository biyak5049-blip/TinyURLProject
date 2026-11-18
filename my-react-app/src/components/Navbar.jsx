
function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-[#117b91] to-[#003653] text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-3xl font-extrabold tracking-wider">
          TINYURL
        </h1>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-9">
          <a href="#plans" className="hover:text-teal-200">
            Plans
          </a>

          <a href="#features" className="hover:text-teal-200">
            Features
          </a>

          <a href="#domains" className="hover:text-teal-200">
            Domains
          </a>

          <a href="#resources" className="hover:text-teal-200">
            Resources
          </a>
        </div>

        {/* Login and Signup */}
        <div className="flex items-center gap-5">
          <button className="font-medium hover:text-teal-200">
            Log In
          </button>

          <button className="bg-[#117f98] px-5 py-3 rounded-md hover:bg-[#1595ad]">
            Sign Up
          </button>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
