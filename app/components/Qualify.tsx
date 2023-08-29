import Link from "next/link";

function Qualify() {
  return (
    <div className="font-black text-blue-900 w-[90vw] mx-auto custom-shadow rounded-md py-8 translate-y-[-10%] bg-white mb-24">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-xs font-black my-6 sm:text-xl lg:text-3xl">Pre-qualify with no impact to your credit</h1>
        <p className="text-xs md:text-lg ">Est. Vehicle Price</p>
        <p className="text-xl sm:text-5xl md:text-6xl flex items-center gap-2">$40,500</p>
        <Link
          href="/"
          className="py-4 px-10 rounded-lg font-black my-5 bg-yellow-400 text-black text-xs lg:text-lg lg:px-24"
        >
          GET PRE-QUALIFIED
        </Link>
      </div>
    </div>
  );
}

export default Qualify;
