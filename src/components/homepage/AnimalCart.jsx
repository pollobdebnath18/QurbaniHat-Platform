import Image from "next/image";
import React from "react";

const AnimalCart = ({ animal }) => {
  console.log(animal, "animal-cart");
  const { name, image, type, weight, price } = animal;
  return (
    <div className="card bg-gray-700 shadow-md h-full">
      <figure className="bg-black p-4">
        <div className="relative w-full h-52">
          <Image
            src={image}
            alt="animal"
            fill
            className="object-cover rounded-xl"
          />
        </div>
      </figure>

      <div className="card-body text-gray-200 font-bold ">
        <h2 className="card-title flex justify-between items-center text-2xl">
          {name}

          <span
            className={`badge ${
              type === "Cow"
                ? "bg-purple-400"
                : type === "Goat"
                  ? "bg-blue-400 text-black"
                  : type === "Sheep"
                    ? "bg-blue-400"
                    : "bg-gray-500"
            }`}
          >
            {type}
          </span>
        </h2>

        <div className="flex justify-between items-center text-lg">
          <p>{weight}</p>
          <p className="text-right ">
            TK <span className="text-yellow-500">{price}</span>
          </p>
        </div>

        <div className="mt-4">
          <button className="btn bg-blue-600 w-full">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default AnimalCart;
