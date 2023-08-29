import React from "react";
import Accordions from "../../utils/Accordion";

function Popular() {
  return (
    <div className="bg-gradient-to-r from-slate-200 to-slate-0 py-16 mt-32">
      <div className="w-[90vw] mx-auto">
        <h1 className="font-black text-3xl my-4">Popular searches</h1>
        <Accordions />
      </div>
    </div>
  );
}

export default Popular;
