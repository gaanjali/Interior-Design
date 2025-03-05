import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-center px-8 py-16 bg-white">
      {/* Left Side - Text Content */}
      <div className="lg:w-1/2 text-left">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">ABOUT US</h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s.
        </p>
        <button className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 transition">
          LEARN MORE
        </button>
      </div>

      {/* Right Side - Image */}
      <div className="lg:w-1/2 mt-8 lg:mt-0">
        <div className="overflow-hidden rounded-3xl">
          <Image
            src="/photos/main2.jpg" // Change this path if necessary
            alt="Interior Design"
            width={600} // Adjust width as needed
            height={400} // Adjust height as needed
            className="rounded-3xl"
          />
        </div>
      </div>
    </section>
  );
}
