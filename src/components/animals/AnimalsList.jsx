"use client";
import React, { useState } from "react";
import SortByPrice from "./SortByPrice";
import AnimalCart from "../homepage/AnimalCart";

const AnimalsList = ({ animals }) => {
  const [sortedAnimals, setSortedAnimals] = useState(animals);

  const handleSort = (type) => {
    let sorted = [...sortedAnimals];

    if (type === "asc") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (type === "desc") {
      sorted.sort((a, b) => b.price - a.price);
    }

    setSortedAnimals(sorted);
  };

  return (
    <div className="max-w-[1100px] mx-auto">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold my-12">All animals</h2>

        <SortByPrice onSort={handleSort} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {sortedAnimals.map((animal) => (
          <AnimalCart key={animal.id} animal={animal} />
        ))}
      </div>
    </div>
  );
};

export default AnimalsList;
