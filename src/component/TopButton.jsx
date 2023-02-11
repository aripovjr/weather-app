import React from "react";

function TopButton() {
  const cities = [
    { id: 1, title: "London" },
    { id: 2, title: "Berlin" },
    { id: 3, title: "Istanbul" },
    { id: 4, title: "Mecca" },
    { id: 5, title: "Tashkent" },
  ];

  return (
    <div className="flex items-center justify-around my-6">
      {cities.map((city) => (
        <button key={city.id} className="text-white text-lg font-medium">
          {city.title}
        </button>
      ))}
    </div>
  );
}

export default TopButton;
