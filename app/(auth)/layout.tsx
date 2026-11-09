import Link from "next/link";

export default function AuthLayout({ children }: {children: React.ReactNode}) {
    return (
        <main className="bg-[url('/auth-bg-mobile.jpg')] md:bg-[url('/auth-bg.jpg')] bg-cover bg-center bg-no-repeat min-h-screen">
            <div className="mt-25 md:mt-15 md:ml-20 ml-0 text-center md:text-left">
                <Link href="/" className="text-5xl font-semibold text-[#e1e8f5] font-fredoka">
                    DAILA
                </Link>
                <h2 className="text-3xl text-[#e1e8f5] font-fredoka mt-10 hidden md:block">
                    DAILA seamlessly integrates task management, financial tracking, <br/>
                    and schedule planning into one powerful system so you can master <br/>
                    your day effortlessly.
                </h2>
            </div>
            {children}
        </main>
    );
}