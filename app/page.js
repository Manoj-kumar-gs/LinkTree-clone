"use client";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [handle, setHandle] = useState("");
    const router = useRouter()
    const bittree = async() => {
    if (!handle) return;

    try {
      const res = await fetch(`/api/checkHandle?handle=${handle}`);
      const data = await res.json();

      if (data.exists && data.status === 200) {
        router.push(`/${handle}`); 
      } else {
        router.push(`/url?handle=${handle}`);
      }
    } catch (err) {
      console.error("Failed to check handle:", err);
    }
    }
    
  return (
    <>
    <div className="grid grid-cols-2">
      <div className="w-[44vw] flex flex-col items-start justify-center gap-4 p-8">
      <h1 className="font-extrabold text-[70px] text-[#d2e823]">Everything you are. In one, simple link in bio.</h1>
      <p className="text-[17px] font-semibold text-white">Join 70M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.</p>
      <div className="flex items-center gap-2 my-8">
        <input type="text" value={handle} onChange={(e)=> setHandle(e.target.value)} onKeyDown={(e)=> e.key==="Enter" && bittree()} placeholder="linktr.ee/" className="bg-gray-200 focus:outline-[#254f1a] py-4 px-3 rounded-lg" />
        <button onClick={bittree} className="bg-[#e9c0e9] text-black font-bold py-4 px-6 rounded-full cursor-pointer hover:scale-105 transition-transform duration-200 ease-in-out">Your Linktree</button>
      </div>
      </div>
      <div className="w-[44vw] flex items-center justify-center">
       <Image width={500} height={500} src="/hero.png" alt="hero image" srcSet="" className="w-[37vw] cursor-pointer"/>
      </div>
    </div>

    <div className="grid grid-cols-2 bg-[#e9c0e9] w-[100vw] h-[100vh]">
      <div className="w-[44vw] flex items-center justify-center">
       <Image width={500} height={500} src="/home.png" alt="hero image" srcSet="" className="w-[37vw] cursor-pointer"/>
      </div>
      <div className="w-[44vw] flex flex-col items-start justify-center gap-4 p-8">
      <h1 className="font-extrabold text-[70px] text-[#502274]">Everything you are. In one, simple link in bio.</h1>
      <p className="text-[17px] font-semibold text-white">Join 70M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.</p>
       <div className="flex items-center gap-2 my-8">
        <input type="text" value={handle} onChange={(e)=> setHandle(e.target.value)} onKeyDown={(e)=> e.key === "Enter" && router.push(`/product/?handle=${handle}`)} placeholder="Enter new handle" className="bg-gray-200 focus:outline-[#502274] py-4 px-3 rounded-lg" />
        <button onClick={(e)=> router.push(`/product/?handle=${handle}`)} className="bg-[#502274] text-white font-bold py-4 px-6 rounded-full cursor-pointer hover:scale-105 transition-transform duration-200 ease-in-out">Claim Your Linktree</button>
      </div>
      </div>
    </div>
    </>
  );
}
