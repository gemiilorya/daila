import Link from "next/link";

export default function CTA() {
return (    
    <section className="bg-tertiary w-full">
    <div className="py-25 flex justify-center flex-col items-center">
        <div className="mb-6 h-50 w-50 shrink-0 animate-float">
            <div className="blinking-logo" role="img" aria-label="Daila logo" />
        </div>
        <h2 className="text-2xl md:text-4xl font-semibold font-fredoka text-center text-white">Ready to Take Control of Your Day?</h2>
        <p className="text-sm md:text-lg text-center text-gray-300 mt-4 mb-10 px-5">
        Join DAILA and start managing your tasks, finances, and schedule with the help of AI.
        </p>
        <Link href="/signup">
        <button className="btn-glow bg-primary hover:bg-hover text-white font-bold w-50 h-15 rounded-full">
            Get Started
        </button>
        </Link>
    </div>
    </section>
    );
}