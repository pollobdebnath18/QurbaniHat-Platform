import { fetchAnimalData } from "@/utils/fetchAnimalData";
import { HashLoader } from "react-spinners";
import AnimalsList from "@/components/animals/AnimalsList";


const AllAnimalsPage = async () => {
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
