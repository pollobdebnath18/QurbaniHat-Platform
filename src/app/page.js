import Banner from "@/components/homepage/Banner";
import Featured from "@/components/homepage/Featured";
import QurbaniTips from "@/components/homepage/QurbaniTips";
import Reveiw from "@/components/homepage/Reveiw";
import TopBreeds from "@/components/homepage/TopBreeds";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Banner></Banner>
      <Featured></Featured>
      <QurbaniTips></QurbaniTips>
      <TopBreeds></TopBreeds>
      <Reveiw></Reveiw>
    </div>
  );
}
