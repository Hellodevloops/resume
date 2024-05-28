import { Hero } from "home/Hero";
import { Steps } from "home/Steps";
import { Features } from "home/Features";
import { Testimonials } from "home/Testimonials";
import { QuestionsAndAnswers } from "home/QuestionsAndAnswers";
import PricingPlans from "home/PricingPlans";
import Footer from "home/Footer";
import Faq from "home/faq";


export default function Home() {
  return (
    <main className="mx-auto max-w-screen-2xl bg-dot px-8  text-gray-900 lg:px-12">
      <Hero />
      <Steps />
      <Features />
      <Testimonials />
      <Faq />
      <Footer />
    </main>
  );
}
