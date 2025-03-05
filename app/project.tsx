import Image from "next/image";

const projects = [
  { image: "/photos/main7.webp", alt: "Project 1" },
  { image: "/photos/main8.jpg", alt: "Project 2" },
  { image: "/photos/main9.jpg", alt: "Project 3" },
  { image: "/photos/main10.jpg", alt: "Project 4" },
  { image: "/photos/main11.jpg", alt: "Project 5" },
  { image: "/photos/main12.jpg", alt: "Project 6" },
];

export default function ProjectsSection() {
  return (
    <section className="py-16 px-8 bg-white text-center">
      <h2 className="text-4xl font-bold text-gray-900">OUR PROJECTS</h2>
      <p className="text-gray-600 mt-2 mb-6">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </p>

      {/* Grid Layout for Projects */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-md">
            <Image
              src={project.image}
              alt={project.alt}
              width={200}
              height={100}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
