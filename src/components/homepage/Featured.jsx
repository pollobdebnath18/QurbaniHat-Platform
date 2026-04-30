import React from "react";

// const animalsData = async () => {
//   const res = await fetch("https://qurbani-hat-platform.vercel.app/data.json");
//   const data = await res.json();
//   console.log(data, "animals");
//   return data;
// };

const Featured = async () => {
//   const animals = await animalsData();
  return (
    <div className="max-w-[1100px] mx-auto">
      this is featured section
      <h2>Total animals : </h2>
    </div>
  );
};

export default Featured;
