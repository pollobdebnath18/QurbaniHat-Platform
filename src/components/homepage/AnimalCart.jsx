import Image from "next/image";
import React from "react";

const AnimalCart = ({ animal }) => {
  console.log(animal, "animal-cart");
  const { name, image } = animal;
  return (
    <div className="max-w-[1100px] mx-auto">
      <div className="card bg-gray-900  shadow-sm">
        <figure>
          <Image
            src={image}
            alt="animal"
            width={200}
            height={200}
            className="bg-white rounded-2xl object-cover"
          ></Image>
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimalCart;
