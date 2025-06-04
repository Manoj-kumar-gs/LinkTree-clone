"use client"
import React, { useState } from 'react'
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import Link from 'next/link';

const page = () => {
    const searchParams = useSearchParams();
    const handleParam = searchParams.get("handle");
    const router = useRouter();
    const [handle, setHandle] = useState(handleParam || "");
    const [links, setLinks] = useState([{ link: "", linkname: "" }]);
    const [profilepic, setProfilepic] = useState("");
    const [description, setDescription] = useState("");

    const handleChange = ({ index, link, linkname }) => {
        setLinks(links.map((item, i) => i === index ? { link, linkname } : item));
    }


    const addLink = () => {
        setLinks([...links, { link: "", linkname: "" }]);
        toast.success("Link added successfully!", {
            position: "top-right",
            theme: "dark",
            autoClose: 3000,
        });
    }

        const handleCreateBitlink = () => {
            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            const raw = JSON.stringify({
                "handle": handle,
                "links": links,
                "profilepic": profilepic,
                "description": description
            });

            const requestOptions = {
                method: "POST",
                headers: myHeaders,
                body: raw,
                redirect: "follow"
            };

            fetch("/api/bittree", requestOptions)
                .then((response) => response.json())
                .then((result) => {
                    if (result.status === 400) {
                    toast.error("Handle already exists!", {
                        position: "top-right",
                        theme: "dark",
                        autoClose: 3000,
                    });
                    return;
                    }
                    router.push(`${process.env.NEXT_PUBLIC_HOST}/${handle}`);
                    toast.success("Linktree created successfully!", {
                        position: "top-right",
                        theme: "dark",
                        autoClose: 3000,
                    });
                    setHandle("");
                    setLinks([{ link: "", linkname: "" }]);
                    setProfilepic("");
                    setDescription("");
                })
                .catch((error) => console.error(error));
        }
        return (
            <div className='bg-[#780016] w-[100vw] h-[100vh] absolute top-0 flex justify-center items-center text-white'>
                <div className='flex flex-col justify-center items-center gap-4 w-[50vw] h-[50vh] mt-30'>
                    <ToastContainer />
                    <h1 className='heading text-2xl font-bold text-white flex items-start w-[30vw] mb-3'>Create your Bittree</h1>
                    <div className='Handle flex flex-col justify-center items-start gap-2 w-[30vw]'>
                        <div className='font-semibold mb-1'>Step 1: Claim Your Handle</div>
                        <input type="text" value={handle} onChange={(e) => setHandle(e.target.value)} placeholder='enter handle name' className='bg-white text-gray-950 border focus:outline-[#780016] py-1.5 px-4 rounded-full ml-3 w-[30vw]' />
                    </div>
                    <div className='flex flex-col justify-center items-start gap-2 w-[30vw]'>
                        <div className='font-semibold mb-1'>Step 2: Add Links</div>

                        {links && links.map((item, index) => (
                            <div key={index} className='flex justify-center items-center gap-1 w-[30vw] ml-3'>
                                <input type="text" value={item.link || ""} onChange={(e) => {
                                    handleChange({ index, link: e.target.value, linkname: item.linkname });
                                }} placeholder='enter link' className='bg-white text-gray-950 border focus:outline-[#780016] py-1.5 px-4 rounded-full w-[15vw]' />
                                <input type="text" value={item.linkname} onChange={(e) => {
                                    handleChange({ index, link: item.link, linkname: e.target.value });
                                }} placeholder='enter link name' className='bg-white text-gray-950 border focus:outline-[#780016] py-1.5 px-4 rounded-full w-[15vw]' />
                            </div>
                        ))}
                        <button disabled={links.some(link => !link.link || !link.linkname)} onClick={addLink} className='bg-green-500 w-[30vw] flex justify-center items-center py-3 mt-4 rounded-full ml-3 cursor-pointer disabled:bg-gray-300 disabled:cursor-default'>Add Link</button>
                    </div>
                    <div className='flex flex-col justify-center items-start gap-2 w-[30vw]'>
                        <div className='font-semibold mb-1'>Step 3: Add Profile And Description</div>
                        <input type="text" value={profilepic} onChange={(e) => setProfilepic(e.target.value)} placeholder='enter profile pic url' className='bg-white text-gray-950 border focus:outline-[#780016] py-1.5 px-4 rounded-full ml-3 w-[30vw]' />
                        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder='enter profile description' className='bg-white text-gray-950 border focus:outline-[#780016] py-1.5 px-4 rounded-full ml-3 w-[30vw]' />
                        <button disabled={!handle || !profilepic || !description || links.some(link => !link.link || !link.linkname)} onClick={handleCreateBitlink} className='bg-green-500 w-[30vw] flex justify-center items-center py-3 mt-4 rounded-full ml-3 cursor-pointer disabled:bg-gray-300 disabled:cursor-default'>Create Your Bitlink</button>
                    </div>
                </div>
                <div>
                    <Link href="/pricing">
                    <img src="/product.png" alt="product page" className='w-[40vw] h-[90vh] pt-[15vh]' srcSet="" />
                    </Link>
                </div>
            </div>
        )
    }

    export default page

