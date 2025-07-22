import React from 'react'
import Link from 'next/link'

const page = () => {
    return (
        <div className="bg-white rounded-2xl shadow-lg max-w-xl w-full p-8 text-center mx-auto font-bold">
            <h1 className="text-4xl mb-4 text-indigo-600 font-bold">About Us</h1>
            <p className="text-lg text-gray-700 mb-6">
                Welcome to our <strong>Linktree Clone</strong> project!
            </p>
            <p className="text-base text-gray-600 mb-6">
                Our mission is to help you connect all your important links in one beautiful, customizable place.
                Whether you are a creator, business, or just want to share your favorite links, our platform makes it easy and elegant.
            </p>
            <ul className="text-left text-gray-700 mx-auto mb-6 max-w-md text-base list-disc list-inside">
                <li>✨ Simple and intuitive interface</li>
                <li>🎨 Customizable profiles</li>
                <li>🔗 Unlimited links</li>
                <li>📱 Mobile-friendly design</li>
            </ul>
            <p className="text-blue-600 font-bold mb-2">
                Thank you for visiting and supporting our project!
            </p>
            <Link href="/developwithmanoj">
                <p className="text-blue-600 font-bold cursor-pointer hover:underline">
                    Follow us on social media for updates and more!
                </p>
            </Link>
        </div>
    )
}

export default page

export const metadata = {
    title: "Linktree - About Us",
    description: "About Us - Linktree Clone Project",
};
