export const fetchAnimalData = async () => {
  const res = await fetch("https://qurbani-hat-platform.vercel.app/data.json");
  const data = await res.json();
  // console.log(data, "animals 777777");
  return data;
};
