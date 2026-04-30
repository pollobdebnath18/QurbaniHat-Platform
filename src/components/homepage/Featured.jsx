import React from "react";
import AnimalCart from "./AnimalCart";

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
      this is featured section
      <h2>Total animals : {animals?.length}</h2>
      <div className="grid grid-cols-3 gap-10 ">
        {animals.slice(0,3).map((animal) => {
          return <AnimalCart key={animal.id} animal={animal}></AnimalCart>;
        })}
      </div>
    </div>
  );
};

export default Featured;
