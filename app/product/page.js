import React from 'react'
import Link from 'next/link'

const page = () => {
    return (
        <div className='bg-[#780016] w-[100vw] h-[100vh] absolute top-0 flex justify-center items-center text-white'>
            <div className='flex flex-col justify-center items-center space-y-5 w-[50vw] h-[50vh]'>
                <h1>Create your Bittree</h1>
                <div>
                    <div>step1: claim your handle</div>
                    <input type="text" placeholder='enter handle name' />
                </div>
                <div>stap2: </div>
            </div>
            <div>
                <img src="/product.png" alt="product page" className='w-[50vw] h-[90vh] pt-[15vh]' srcSet="" />
            </div>
        </div>
    )
}

export default page
