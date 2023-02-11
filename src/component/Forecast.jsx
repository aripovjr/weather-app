import React from "react";

function Forecast({ title }) {
  return (
    <div>
      <div className="flex items-center justify-start mt-6">
        <p className="text-white font-medium uppercase">{title}</p>
      </div>
      <hr className="my-2" />

      <div className="flex flex-row items-center justify-between text-white">
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">tiitle</p>
          <img src="" alt="" />
          <p className="font-light text-sm">title</p>
          <img src="" alt="" />
          <p className="font-medium">as</p>
        </div>
      </div>
    </div>
  );
}

export default Forecast;
