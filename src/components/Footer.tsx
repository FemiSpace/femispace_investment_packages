export function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="mb-2">invest@femispace.com</p>
            <p>+1 (213) 691-7401</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-secondary-light">About Us</a></li>
              <li><a href="#" className="hover:text-secondary-light">Investment Packages</a></li>
              <li><a href="#" className="hover:text-secondary-light">Contact</a></li>
            </ul>
          </div>

          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">FemiSpace</h3>
            <p className="mb-4">
              Revolutionizing women's health through early detection and reversal of cardiometabolic conditions.
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500 text-sm">
            {new Date().getFullYear()} FemiSpace. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
