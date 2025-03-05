import Image from "next/image";

const directors = [
  {
    name: "Simme John",
    role: "DIRECTOR",
    image: "/photos/main4.jpg", // Replace with actual image path
  },
  {
    name: "Marie Smith",
    role: "DIRECTOR",
    image: "/photos/main5.jpg",
  },
  {
    name: "Barbara Jones",
    role: "DIRECTOR",
    image: "/photos/main6.jpg",
  },
];

export default function CreativeDirectors() {
  return (
    <section className="py-16 px-8 bg-white text-center">
      <h2 className="text-4xl font-bold text-gray-900">CREATIVE DIRECTOR</h2>
      <p className="text-gray-600 mt-2 mb-8">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </p>

      {/* Director Cards */}
      <div className="flex flex-col md:flex-row justify-center gap-8">
        {directors.map((director, index) => (
          <div key={index} className="max-w-sm bg-white rounded-lg shadow-lg">
            <Image
              src={director.image}
              alt={director.name}
              width={300}
              height={350}
              className="rounded-t-lg"
            />
            <div className="border-t-4 border-orange-500 text-center py-3">
              <h3 className="text-xl font-semibold text-gray-900">{director.name}</h3>
              <p className="text-orange-500 uppercase text-sm font-bold">{director.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
