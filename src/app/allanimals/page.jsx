import AnimalCart from "@/components/homepage/AnimalCart";
import React from "react";

const animalsData = async () => {
  const res = await fetch("https://qurbani-hat-platform.vercel.app/data.json");
  const data = await res.json();
  //   console.log(data, "animals");
  return data;
};

const AllAnimalsPage = async () => {
  const animals = await animalsData();
  return (
    <div className="max-w-[1100px] mx-auto">
      <h2 className="text-3xl font-bold text-center my-12">
        {" "}
        All animals
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 ">
        {animals.map((animal) => {
          return <AnimalCart key={animal.id} animal={animal}></AnimalCart>;
        })}
      </div>
    </div>
  );
};

export default AllAnimalsPage;
