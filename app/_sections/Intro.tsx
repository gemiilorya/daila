export default function Intro (){
    return(
    <section className="max-w-6xl mx-auto py-50 mb-20">
        <h2 className="text-5xl font-semibold font-fredoka text-center mb-20">More Than an Assistant</h2>
        <div className="flex flex-col md:flex-row gap-20 items-center justify-center">
            <div className="mb-6 h-50 w-50 shrink-0 animate-float">
                <div className="blinking-logo" role="img" aria-label="Daila logo" />
            </div>
            <p className="px-5 md:px-0 mt-4 text-2xl italic text-center text-gray-600 md:text-justify">
                DAILA isn&apos;t just another chatbot. She&apos;s your personal productivity companion, designed to help you stay organized, understand your habits, and make everyday decisions with confidence.
                <br/><br/>
                Whether you&apos;re managing deadlines, tracking expenses, or planning your week, DAILA is always ready to help.
            </p>
        </div>
    </section>
    );
}