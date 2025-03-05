import { FaRocket, FaBolt } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="bg-white py-12 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Top Features */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Feature 1 */}
          <div className="flex items-start space-x-4">
            <FaBolt className="text-orange-500 text-3xl" />
            <div>
              <h3 className="font-bold text-lg">Free online consultation</h3>
              <p className="text-gray-600">
                Talk to our designers online and start planning your interiors from home.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-start space-x-4">
            <FaRocket className="text-orange-500 text-3xl" />
            <div>
              <h3 className="font-bold text-lg">Pay just 5% to book</h3>
              <p className="text-gray-600">
                We’ve dropped our booking fees. Now book your projects by paying just 5%.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex items-start space-x-4">
            <FaBolt className="text-orange-500 text-3xl" />
            <div>
              <h3 className="font-bold text-lg">Hassle-free cancellation</h3>
              <p className="text-gray-600">
                Get 100% refund on cancellations within 15 days of booking.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-6">
          <button className="bg-orange-500 text-white px-6 py-3 rounded-md font-semibold">
            CONSULT ONLINE NOW
          </button>
        </div>
      </div>
    </section>
  );
}
