import Image from "next/image";
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-6 sm:p-10">
        <div className="flex flex-col gap-4 items-center sm:items-start text-center sm:text-left">
          <div className="flex items-center gap-3">
            <Image
              className="rounded-full"
              src="https://play-lh.googleusercontent.com/BZhHPtx-N0TRzWIso_Ib--N79_wSUCuHgcMlplfyqXprBvj5OVmt35ph1THYTN9lHLg=w240-h480-rw"
              alt="QurbaniHat"
              width={50}
              height={50}
            />
            <h2 className="text-xl font-bold">QurbaniHat</h2>
          </div>

          <p className="text-sm text-gray-300 max-w-xs">
            Providing reliable livestock booking service for Qurbani animals.
          </p>
        </div>

        <div className="text-sm space-y-2 text-center ">
          <h3 className="font-bold text-lg mb-2 flex justify-center items-center">
            Contact
          </h3>
          <p>📍 Banani, 221 Mahakali, Dhaka</p>
          <p>📞 +880 1780589179</p>
          <p>✉️ pullobdebnath@gmail.com</p>
        </div>

        <div className=" ">
          <h3 className="font-bold text-lg mb-3 flex items-center justify-center md:justify-end text-right">
            Follow Us
          </h3>

          <div className="flex justify-center md:justify-end gap-5 text-2xl">
            <FaFacebook className="hover:text-blue-500 cursor-pointer transition" />
            <FaInstagram className="hover:text-pink-500 cursor-pointer transition" />
            <FaYoutube className="hover:text-red-500 cursor-pointer transition" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
