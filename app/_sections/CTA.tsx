import Link from "next/link";

export default function CTA() {
return (    
    <section className="bg-[#0f1727] w-full">
    <div className="bg-[#0f1727] py-20 flex justify-center flex-col items-center gap-10">
        <div className="mb-6 h-30 w-30 shrink-0 md:h-50 md:w-50 animate-float">
            <div className="blinking-logo" role="img" aria-label="Daila logo" />
        </div>
        <h2 className="text-4xl font-semibold font-fredoka text-center text-white">Ready to Take Control of Your Day?</h2>
        <p className="text-lg text-center text-gray-300 mt-4">
        Join DAILA and start managing your tasks, finances, and schedule with the help of AI.
        </p>
        <Link href="/signup">
        <button className="btn-glow bg-[#5359a7] hover:bg-[#4a5190] text-white font-bold w-50 h-15 rounded-full">
            Get Started
        </button>
        </Link>
    </div>
    </section>
    );
}