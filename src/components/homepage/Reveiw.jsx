import Image from "next/image";

const Reveiw = () => {
  return (
    <div className="bg-gray-200 py-10 overflow-hidden">
      <h1 className="text-3xl font-bold text-center text-green-600">
        Client Reviews
      </h1>

      <p className="text-center text-gray-600 mt-2 mb-8 max-w-xl mx-auto">
        What our clients say about our work, quality, and dedication. We value
        every feedback to improve our service.
      </p>

      <div className="overflow-hidden">
        <div className="marquee flex gap-6">
          <div className="bg-white shadow rounded-xl p-6 min-w-[260px] text-center flex flex-col items-center">
            <Image
              src="https://i.pravatar.cc/100?img=1"
              width={80}
              height={80}
              alt="user"
              className="rounded-full"
            />
            <h2 className="font-semibold mt-3 text-black">John Doe</h2>
            <p className="text-sm text-gray-500">Software Engineer</p>
            <p className="text-gray-700 text-sm mt-2">
              Amazing experience working with this team. Highly recommended!
            </p>
            <div className="text-yellow-400 mt-2">★★★★★</div>
          </div>

          <div className="bg-white shadow rounded-xl p-6 min-w-[260px] text-center flex flex-col items-center">
            <Image
              src="https://i.pravatar.cc/100?img=2"
              width={80}
              height={80}
              alt="user"
              className="rounded-full"
            />
            <h2 className="font-semibold mt-3 text-black">Sarah Ali</h2>
            <p className="text-sm text-gray-500">Software Engineer</p>
            <p className="text-gray-700 text-sm mt-2">
              Very professional and delivered on time with great quality.
            </p>
            <div className="text-yellow-400 mt-2">★★★★☆</div>
          </div>

          <div className="bg-white shadow rounded-xl p-6 min-w-[260px] text-center flex flex-col items-center">
            <Image
              src="https://i.pravatar.cc/100?img=3"
              width={80}
              height={80}
              alt="user"
              className="rounded-full"
            />
            <h2 className="font-semibold mt-3 text-black">Michael</h2>
            <p className="text-sm text-gray-500">Software Engineer</p>
            <p className="text-gray-700 text-sm mt-2">
              Excellent UI and clean code structure. Very satisfied.
            </p>
            <div className="text-yellow-400 mt-2">★★★★★</div>
          </div>

          <div className="bg-white shadow rounded-xl p-6 min-w-[260px] text-center flex flex-col items-center">
            <Image
              src="https://i.pravatar.cc/100?img=4"
              width={80}
              height={80}
              alt="user"
              className="rounded-full"
            />
            <h2 className="font-semibold mt-3 text-black">Emily</h2>
            <p className="text-sm text-gray-500">Software Engineer</p>
            <p className="text-gray-700 text-sm mt-2">
              Smooth communication and very reliable developer.
            </p>
            <div className="text-yellow-400 mt-2">★★★★☆</div>
          </div>

          <div className="bg-white shadow rounded-xl p-6 min-w-[260px] text-center flex flex-col items-center">
            <Image
              src="https://i.pravatar.cc/100?img=5"
              width={80}
              height={80}
              alt="user"
              className="rounded-full"
            />
            <h2 className="font-semibold mt-3 text-black">David</h2>
            <p className="text-sm text-gray-500">Software Engineer</p>
            <p className="text-gray-700 text-sm mt-2">
              Fast delivery and very professional approach.
            </p>
            <div className="text-yellow-400 mt-2">★★★★★</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reveiw;
