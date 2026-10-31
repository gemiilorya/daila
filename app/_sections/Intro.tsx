export default function Intro (){
    return(
    <section className="max-w-6xl mx-auto py-50 mb-20">
        <h2 className="text-5xl font-semibold font-fredoka text-center mb-20">More Than an Assistant</h2>
        <div className="flex gap-20 items-center justify-center">
        <div className="mb-6 h-30 w-30 shrink-0 md:h-50 md:w-50 animate-float">
            <div className="blinking-logo" role="img" aria-label="Daila logo" />
        </div>
        <p className="mt-4 text-2xl italic text-gray-600 text-justify">
            DAILA isn&apos;t just another chatbot. She's your personal productivity companion, designed to help you stay organized, understand your habits, and make everyday decisions with confidence.
            <br/><br/>
            Whether you&apos;re managing deadlines, tracking expenses, or planning your week, DAILA is always ready to help.
        </p>
        </div>
    </section>
    );
}