import React from 'react';
import Link from 'next/link';

const Page = () => {
    return (
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full text-center font-bold">
            <h1 className="text-4xl font-bold mb-4 text-indigo-600">Absolutely Free!</h1>
            <p className="text-base text-slate-500 mb-8">
                Enjoy all features at zero cost. No hidden fees, no credit card required. Start building your Linktree today!
            </p>
            <div className="my-8">
                <span className="text-5xl font-bold text-green-500">$0</span>
                <span className="text-lg text-slate-500">/ forever</span>
            </div>
            <ul className="list-none p-0 mb-8 text-slate-800 text-left space-y-2">
                <li>✅ Add Unlimited Links</li>
                <li>✅ One Click To Your Profile</li>
                <li>✅ View Analytics</li>
                <li>✅ Remove Ads</li>
            </ul>
            <button className="bg-indigo-600 text-white rounded-lg px-8 py-3 text-base font-bold cursor-pointer transition-colors duration-200 hover:bg-indigo-700 mb-3">
                Get Started For Free
            </button>
            <Link href="/developwithmanoj">
                <p className="text-blue-600 font-bold cursor-pointer hover:underline">
                    Follow us on social media for updates and more!
                </p>
            </Link>
        </div>
    );
};

export default Page;

export const metadata = {
    title: "Linktree - About Pricing",
    description: "Absolutely Free Linktree Clone",
};
