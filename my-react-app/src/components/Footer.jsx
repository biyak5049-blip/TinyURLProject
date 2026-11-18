
function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-8 px-6">

      <div className="container mx-auto text-center">

        <h2 className="text-2xl font-bold mb-4">
          TinyURL
        </h2>

        <p className="text-gray-400 mb-4">
          Make your long URLs short and simple.
        </p>

        <div className="flex justify-center gap-6 mb-5">

          <a href="#" className="hover:text-teal-400">
            Privacy
          </a>

          <a href="#" className="hover:text-teal-400">
            Terms
          </a>

          <a href="#" className="hover:text-teal-400">
            Contact
          </a>

        </div>

        <p className="text-gray-500 text-sm">
          © 2026 TinyURL. All rights reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;
