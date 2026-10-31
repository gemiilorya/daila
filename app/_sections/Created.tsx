import { 
    FaBriefcase,
    FaHome,
    FaChartLine,
} from "react-icons/fa";

import { IoSchoolOutline } from "react-icons/io5";

const WORKS: Record<string, { icon: React.ReactNode; title: string; desc: string }> = {
    students: {
        icon: <IoSchoolOutline />,
        title: "Students",
        desc: "Track assignments, exams, schedules, and budgets."
    },
    professionals: {
        icon: <FaBriefcase />,
        title: "Professionals",
        desc: "Stay on top of deadlines, meetings, and expenses.",
    },
    personal: {
        icon: <FaHome />,
        title: "Personal Life",
        desc: "Manage bills, goals, wishlists, and daily routines.",
    },
    productivity: {
        icon: <FaChartLine />,
        title: "Productivity Enthusiasts",
        desc: "Build better habits and understand where your time goes."
    }
};

export default function Created() {
    return (
        <section className="max-w-4xl mx-auto py-50">
        <h2 className="text-5xl font-semibold font-fredoka text-center mb-20">Designed For Everyday Life</h2>
        <div className="border border-gray-400 rounded-2xl grid grid-cols-2">
            {Object.entries(WORKS).map(([key, section], index) => (
                <div
                key={index}
                className={`p-8 hover:bg-[#d0d6e2] ${
                    index === 0 ? "border-b border-r border-gray-400" : // top-left
                    index === 1 ? "border-b border-gray-400" :          // top-right
                    index === 2 ? "border-r border-gray-400" :          // bottom-left
                    ""                                                   // bottom-right, no border
                }`}
                >
                <div className="text-5xl mb-4 flex justify-center">{section.icon}</div>
                <h3 className="text-xs font-bold tracking-widest uppercase text-[#5359a7] mb-3">
                    {section.title}
                </h3>
                <p className="text-sm text-gray-700">{section.desc}</p>
                </div>
            ))}
            </div>
        </section>
    );
}