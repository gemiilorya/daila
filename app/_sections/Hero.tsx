import Link from "next/link";

export default function Hero (){
    return(
        <div className="flex flex-col items-center justify-center py-50">
            <div className="mb-6 h-30 w-30 shrink-0 md:h-50 md:w-50 animate-float">
                <div className="blinking-logo" role="img" aria-label="Daila logo" />
            </div>
            <h1 className="text-4xl font-semibold font-fredoka">Meet DAILA — Your Daily AI Life Assistant</h1>
            <p className="mt-4 text-2xl italic text-gray-600 text-center">
            Stay organized, in control, and one step ahead. <br/>
            DAILA helps you manage tasks, track your finances, <br/>
            plan your schedule, and make smarter decisions—effortlessly.
            </p>
            <div className="flex gap-4 mt-8">
            <Link href="/signup">
                <button className="btn-glow bg-primary hover:bg-hover border-primary border-3 hover:border-hover text-white font-bold w-50 h-15 rounded-full">
                Start Now
                </button>
            </Link>
            <Link href="/login">
                <button className="btn-glow border-primary border-3 hover:border-hover font-bold w-50 h-15 rounded-full">
                Log In
                </button>
            </Link>
            </div>
        </div>
    );
}