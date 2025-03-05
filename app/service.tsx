import Image from "next/image";

export default function Services() {
  return (
    <section className="relative bg-orange-400 py-10 px-6">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        
        {/* Left Side - Image */}
        <div className="lg:w-1/2 relative mb-8 lg:mb-0">
          <div className="bg-white p-2 rounded-lg shadow-lg inline-block">
            <Image
              src="/photos/main3.jpg" // Change this path as per your image
              alt="Interior Design"
              width={600} // Adjust width as needed
              height={200} // Adjust height as needed
              className="rounded-md"
            />
          </div>
        </div>

        {/* Right Side - Text Content */}
        <div className="lg:w-1/2 text-white text-left lg:pl-12">
          <h2 className="text-4xl font-bold mb-2">OUR PROFESSIONAL SERVICES</h2>
          <p className="text-lg italic mb-4">
            We Will Create Modern And First-Class Interior.
          </p>
          <p className="text-white leading-relaxed mb-6">
          Professional interior design services transform spaces by blending aesthetics and functionality. Expert designers curate layouts, color schemes, furniture, and décor to create visually appealing and practical environments. Whether residential or commercial, these services enhance comfort, efficiency, and style, ensuring personalized solutions that reflect clients’ tastes and needs while maximizing space potential.
          </p>
          <button className="px-6 py-3 bg-white text-orange-500 font-semibold rounded-md hover:bg-gray-100 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
