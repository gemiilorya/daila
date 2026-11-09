import { 
    FaRegCheckCircle,
    FaRegCalendarAlt,
    FaWallet,
    FaRobot,
} from "react-icons/fa";

const SECTIONS = [
    {
        icon: <FaRegCheckCircle />,
        title: "Smart Task Management",
        body: "Organize your daily tasks with deadlines, priorities, and reminders — while DAILA gives you smart suggestions to stay on track and avoid overwhelm."
    },
    {
        icon: <FaRegCalendarAlt />,
        title: "Intelligent Scheduling",
        body: "Plan your days with ease. DAILA helps you manage events, avoid conflicts, and find the perfect time for what matters most."
    },
    {
        icon: <FaWallet />,
        title: "Finance Tracker",
        body: "Track expenses, manage budgets, and monitor bills in one place. DAILA provides insights to help you spend smarter and save better."
    },
    {
        icon: <FaRobot />,
        title: "AI-Powered Assistant",
        body: "Chat with DAILA to create tasks, schedule events, or get personalized advice—just like having your own intelligent life assistant."
    }
];

function Card ({ section }){
    return (
        <div className={`w-65 h-90 bg-transparent rounded-lg border-2 border-gray-300 p-6 hover:border-primary/50 hover:shadow-glow shadow-[#5359a7]/40`}>
        <div className="text-7xl mb-4 flex justify-center">{section.icon}</div>
        <h3 className="text-xl font-semibold mb-2 text-center">{section.title}</h3>
        <p className="text-[16px] text-justify">{section.body}</p>
        </div>
    )
}

export default function Features (){
    return(
        <section className="max-w-6xl mx-auto pt-25 py-50">
            <h2 className="text-5xl font-semibold font-fredoka text-center mb-20">Key Features</h2>
            <div className="flex flex-wrap justify-center items-center gap-3">
            {SECTIONS.map((section, index) => (
                <Card key={index} section={section} />
            ))}
            </div>
        </section>
    );
}