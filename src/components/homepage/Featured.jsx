import React from "react";
import AnimalCart from "./AnimalCart";
import Link from "next/link";
import { fetchAnimalData } from "@/utils/fetchAnimalData";

const Featured = async () => {
  const animals = await fetchAnimalData();
  return (
    <div className="max-w-[1100px] mx-auto">
      <h2 className="text-3xl font-bold text-center my-12">Featured animals</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-3 lg:mx-0">
        {animals.slice(0, 4).map((animal) => {
          return <AnimalCart key={animal.id} animal={animal}></AnimalCart>;
        })}
      </div>
      <div className="text-center">
        <Link href={"/allanimals"}>
          <button className="btn btn-primary mt-8 mb-16 ">More Animals</button>
        </Link>
      </div>
    </div>
  );
};

export default Featured;
