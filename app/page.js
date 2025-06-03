import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="grid grid-cols-2">
      <div className="w-[44vw] flex flex-col items-start justify-center gap-4 p-8">
      <h1 className="font-extrabold text-[70px] text-[#d2e823]">Everything you are. In one, simple link in bio.</h1>
      <p className="text-[17px] font-semibold text-white">Join 70M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.</p>
      <div className="flex items-center gap-2 my-8">
        <input type="text" placeholder="linktr.ee/" className="bg-gray-200 focus:outline-[#d2e823] py-4 px-3 rounded-lg" />
        <button className="bg-[#e9c0e9] text-black font-bold py-4 px-6 rounded-full cursor-pointer hover:scale-105 transition-transform duration-200 ease-in-out">Claim Your Linktree</button>
      </div>
      </div>
      <div className="w-[44vw] flex items-center justify-center">
       <img src="/hero.png" alt="hero image" srcSet="" className="w-[37vw] cursor-pointer"/>
      </div>
    </div>

    <div className="grid grid-cols-2 bg-[#e9c0e9] w-[100vw] h-[100vh]">
      <div className="w-[44vw] flex items-center justify-center">
       <img src="/home.png" alt="hero image" srcSet="" className="w-[37vw] cursor-pointer"/>
      </div>
      <div className="w-[44vw] flex flex-col items-start justify-center gap-4 p-8">
      <h1 className="font-extrabold text-[70px] text-[#502274]">Everything you are. In one, simple link in bio.</h1>
      <p className="text-[17px] font-semibold text-white">Join 70M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.</p>
      <div className="flex items-center gap-2 my-8">
        <button className="bg-[#502274] text-black font-bold py-4 px-12q rounded-full cursor-pointer hover:scale-105 transition-transform duration-200 ease-in-out">Claim Your Linktree</button>
      </div>
      </div>
    </div>
    </>
  );
}
