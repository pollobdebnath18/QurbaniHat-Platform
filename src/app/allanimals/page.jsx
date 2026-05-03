import { fetchAnimalData } from "@/utils/fetchAnimalData";
import { HashLoader } from "react-spinners";
import AnimalsList from "@/components/animals/AnimalsList";

// const getAnimalsData = async () => {
//   const res = await fetch("https://qurbani-hat-platform.vercel.app/data.json");
//   return res.json();
// };

const AllAnimalsPage = async () => {
  // let animals = await getAnimalsData();
  const animals = await fetchAnimalData();
  console.log(animals);
  if (!animals) {
    return (
      <div className="flex justify-center items-center bg-red-700">
        <HashLoader className="text-red-700"></HashLoader>
      </div>
    );
  }

  return (
    <div>
      <AnimalsList animals={animals}></AnimalsList>
    </div>
  );
};

export default AllAnimalsPage;
