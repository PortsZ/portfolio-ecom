import React from "react";

const Stats = () => {
  return (
    <div>
      <div className=" rounded-3xl bg-orange-600  ">
        <h1 className="text-black font-BebasNeue p-3"> Project Stats </h1>
        <div className="flex  p-10 gap-20">
          <div className="flex w-1/3 font-BebasNeue flex-col ">
            <span className="text-black font-poppins mb-10">7</span> Finalized Projects
          </div>
          <div className="flex w-1/3 font-BebasNeue flex-col ">
            <span className="text-black font-poppins mb-10">30+</span> Satisfied Clients
          </div>
          <div className="flex w-1/3 font-BebasNeue flex-col ">
            <span className="text-black font-poppins mb-10">10000+</span> Hours of Work
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
