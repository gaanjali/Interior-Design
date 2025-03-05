import { FaTwitter, FaGoogle, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white py-12 px-6 md:px-16 border-t">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-gray-800">
        
        {/* Interior Design Section */}
        <div>
          <h2 className="text-xl font-bold text-orange-500">INTERIOR DESIGN</h2>
          <p className="mt-2 text-gray-600">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          <div className="flex gap-4 mt-4 text-orange-500">
            <FaTwitter size={24} />
            <FaGoogle size={24} />
            <FaInstagram size={24} />
            <FaYoutube size={24} />
          </div>
        </div>

        {/* Projects Section */}
        <div>
          <h3 className="text-lg font-bold text-orange-500">Projects</h3>
          <ul className="mt-2 text-gray-600 space-y-1">
            <li><a href="#">WHMCS-bridge</a></li>
            <li><a href="#">Search Domain</a></li>
            <li><a href="#">My Account</a></li>
            <li><a href="#">Shopping Cart</a></li>
            <li><a href="#">Our Shop</a></li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div>
          <h3 className="text-lg font-bold text-orange-500">Contact Us</h3>
          <p className="mt-2 text-gray-600">Address: C-308 New Delhi</p>
          <p className="text-gray-600">Phone: +91 9876543210</p>
          <p className="text-gray-600">
            Email: <a href="mailto:info@colorlib.com" className="text-orange-500">info@colorlib.com</a>
          </p>
        </div>

        {/* Newsletter Section */}
        <div>
          <h3 className="text-lg font-bold text-orange-500">Newsletter</h3>
          <p className="mt-2 text-gray-600">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </div>
      </div>
    </footer>
  );
}
