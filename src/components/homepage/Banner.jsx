import Image from "next/image";
import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="carousel w-full h-[450px]">
        <div id="slide1" className="carousel-item relative w-full">
          <Image
            alt="banner-img"
            width={800}
            height={400}
            src="https://pbs.twimg.com/card_img/2047627392777158656/16DNoQHG?format=jpg&name=orig"
            className="w-full"
          />
          <div className="absolute top-75 right-146  ">
            <Link href={"/allanimals"}>
              <button className="btn btn-primary">Explore Animals</button>
            </Link>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <Image
            alt="banner-img"
            width={800}
            height={400}
            src="https://muslimcharity.org.uk/uploads/news/1500_1775576190.jpg"
            className="w-full"
          />
          <div className="absolute top-75 right-146  ">
            <Link href={"/allanimals"}>
              <button className="btn btn-primary">Explore Animals</button>
            </Link>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        <div id="slide3" className="carousel-item relative w-full">
          <Image
            alt="banner-img"
            width={800}
            height={400}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvRucrmEFZZbd6TZE_UkRjoSoL_yc8efpmOQ&s"
            className="w-full"
          />
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="absolute top-75 right-146  ">
            <Link href={"/allanimals"}>
              <button className="btn btn-primary">Explore Animals</button>
            </Link>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
