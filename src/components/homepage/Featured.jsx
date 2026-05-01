import React from "react";
import AnimalCart from "./AnimalCart";
import Link from "next/link";

const animalsData = async () => {
  const res = await fetch("https://qurbani-hat-platform.vercel.app/data.json");
  const data = await res.json();
  //   console.log(data, "animals");
  return data;
};

const Featured = async () => {
  const animals = await animalsData();
  return (
    <div className="max-w-[1100px] mx-auto">
      <h2 className="text-3xl font-bold text-center my-12">
        {" "}
        Featured animals
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 ">
        {animals.slice(0, 6).map((animal) => {
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
