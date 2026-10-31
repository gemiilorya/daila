import { FaArrowRight } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-secondary py-5 px-50 gap-25">
            <div className="flex justify-between items-center">
            <div className="flex flex-col gap-2">
                <h2 className="text-4xl font-semibold text-white font-fredoka">DAILA</h2>
                <p className="italic text-[#e1e8f5]">Your Personal AI Companion</p>
            </div>
            <div className="">
                <p className="text-end italic text-xs text-gray-400 mb-5">
                All Rights Reserved | © 2026 DAILA
                </p>
                <div className="flex gap-2 items-center text-[#e1e8f5]">
                    Like what you see? View the
                    <div className=" flex gap-2 hover:gap-4 items-center transition-all duration-300">
                    <a href="https://lorya-portfolio.vercel.app/" className="font-bold text-[#e1e8f5]">
                        creator&apos;s portfolio
                    </a>
                    <FaArrowRight />
                    </div>
                </div>
            </div>
            </div>
        </footer>
    );
}