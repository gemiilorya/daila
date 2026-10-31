import Hero from "./_sections/Hero"
import Features from "./_sections/Features"
import Intro from "./_sections/Intro";
import Created from "./_sections/Created";
import FAQs from "./_sections/FAQs";
import CTA from "./_sections/CTA";

export default function Home() {
  return (
    <main className="w-full mx-auto">
      <Hero/>
      <Features/>
      <Intro/>
      <Created/>
      <FAQs/>
      <CTA/>
    </main>
  );
}
