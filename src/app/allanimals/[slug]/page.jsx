import BuyButton from "@/components/details/BuyButton";
import DetailsFormSubmit from "@/components/details/DetailsFormSubmit";
import { fetchAnimalData } from "@/utils/fetchAnimalData";
import Image from "next/image";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const animals = await fetchAnimalData();

  const specific = animals.find((it) => String(it.id) === String(slug));

   

  return {
    title: specific?.name || "Animals Details",
    description: specific?.name || "view animals details",
  };
}

const AnimalsDetails = async ({ params }) => {
  const { slug } = await params;
  const animals = await fetchAnimalData();

  const details = animals.find((it) => it.id == slug);

  if (!details) {
    return (
      <div className="text-3xl font-bold text-blue-500 text-center">
        Animal Not Found
      </div>
    );
  }
  const {
    name,
    image,
    type,
    description,
    weight,
    price,
    age,
    location,
    category,
  } = details;

  console.log(slug, "details page");
  return (
    <div className="max-w-[1100px] mx-auto px-4 py-10 bg-gray-400 rounded-sm">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="bg-gray-800 text-white rounded-2xl shadow-lg overflow-hidden">
          <div className="relative w-full h-[320px] bg-black">
            <Image src={image} alt={name} fill className="object-cover" />
          </div>

          <div className="p-6 space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">{name}</h2>
              <span
                className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  type === "Cow"
                    ? "bg-purple-400 text-black"
                    : type === "Goat"
                      ? "bg-amber-300 text-black"
                      : type === "Sheep"
                        ? "bg-blue-400 text-black"
                        : "bg-gray-500"
                }`}
              >
                {type}
              </span>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed">
              {description}
            </p>

            <div className="grid grid-cols-2 gap-3 text-sm text-gray-200">
              <p>
                <span className="text-gray-400">Weight:</span> {weight}
              </p>
              <p>
                <span className="text-gray-400">Age:</span> {age}
              </p>
              <p>
                <span className="text-gray-400">Location:</span> {location}
              </p>
              <p>
                <span className="text-gray-400">Category:</span> {category}
              </p>
            </div>

            <div className="flex justify-between items-center pt-3 border-t border-gray-600">
              <p className="text-green-400 text-xl font-bold">৳ {price}</p>
              <BuyButton details={details}></BuyButton>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow p-6 h-fit">
          <h3 className="text-2xl font-extrabold mb-4 text-green-700">
            Booking Form
          </h3>
          <DetailsFormSubmit details={details}></DetailsFormSubmit>
        </div>
      </div>
    </div>
  );
};

export default AnimalsDetails;
