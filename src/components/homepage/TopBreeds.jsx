import React from "react";

const TopBreeds = () => {
  return (
    <div className="max-w-[1100px] mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-white">
          Top Breeds for Qurbani
        </h2>
        <p className="text-gray-300 mt-3 max-w-2xl mx-auto">
          Explore the most popular and healthy livestock breeds chosen for
          Qurbani. These animals are well-fed, strong, and carefully selected
          from trusted farms across Bangladesh.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        <div className="card bg-white text-black shadow-xl border border-gray-200 p-5">
          <h3 className="text-xl font-bold mb-2 text-black/90">
            Black Bengal Goat
          </h3>
          <p className="text-sm text-black/70">
            One of the most popular goat breeds in Bangladesh. Known for tender
            meat, high demand, and fast growth.
          </p>
        </div>

        <div className="card bg-white text-black shadow-xl border border-gray-200 p-5">
          <h3 className="text-xl font-bold mb-2 text-black/90">Sahiwal Cow</h3>
          <p className="text-sm text-black/70">
            A strong dairy and meat breed with high resistance to heat and
            diseases. Ideal for Qurbani and farming.
          </p>
        </div>

        <div className="card bg-white text-black shadow-xl border border-gray-200 p-5">
          <h3 className="text-xl font-bold mb-2 text-black/90">
            Jamunapari Goat
          </h3>
          <p className="text-sm text-black/70">
            Large-sized goat breed known for its impressive height, meat
            quality, and calm behavior.
          </p>
        </div>

        <div className="card bg-white text-black shadow-xl border border-gray-200 p-5">
          <h3 className="text-xl font-bold mb-2 text-black/90">Deshi Cow</h3>
          <p className="text-sm text-black/70">
            Local Bangladeshi cow breed, strong, healthy, and easily adaptable
            to local environments.
          </p>
        </div>

        <div className="card bg-white text-black shadow-xl border border-gray-200 p-5">
          <h3 className="text-xl font-bold mb-2 text-black/90">Boer Goat</h3>
          <p className="text-sm text-black/70">
            Imported high-quality goat breed known for fast weight gain and
            premium meat production.
          </p>
        </div>

        <div className="card bg-white text-black shadow-xl border border-gray-200 p-5">
          <h3 className="text-xl font-bold mb-2 text-black/90">
            River Buffalo
          </h3>
          <p className="text-sm text-black/70">
            Heavy and strong buffalo breed, commonly used for meat and milk
            production in rural areas.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopBreeds;
