import React from 'react'
import Link from 'next/link'
import mongodbconnect from "@/lib/mongodb"
import { notFound } from 'next/navigation'
import Image from "next/image";

const page = async ({ params }) => {
  const handle = (await params.handle);
  const client = await mongodbconnect;
  const db = client.db("bittree")
  const collection = db.collection("bittreedata");
  const item = await collection.findOne({ handle: handle });
  console.log(item);
  if(!item){
        return notFound()
    }
  return (
    <div className='bg-[#780016] w-[100vw] h-[100vh] absolute top-0 flex justify-center items-start text-[#e9c0e9] z-12 py-10'>
      <Link href="/"><Image width={32} height={32} src="https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/66634daccb34e6d65a41c76d_download.svg" className='w-[13vw] h-[13vh] cursor-pointer absolute top-0 left-3' alt="logo" srcSet="" /></Link>
       {item && <div className="photo flex justify-center flex-col items-center gap-4"> 
            <Image width={128} height={128} src={item.profilepic} alt="profile pic" className='rounded-full'/>
            <span className="font-extrabold text-2xl">@{item.handle}</span>
            <span className="desc w-80 text-center font-bold text-xl">{item.description}</span>
            <div className="links">
                {item.links.map((item, index)=>{
                    return <Link  key={index} href= {item.link}><div className="bg-[#ef8def] py-4 shadow-lg px-2 min-w-96 flex justify-center rounded-md my-4 hover:scale-105 transition-transform duration-300 font-bold text-[18px]">
                       {item.linkname}
                       
                    </div></Link> 
                })}
            </div>
      </div>}
    </div>
  )
}

export default page
