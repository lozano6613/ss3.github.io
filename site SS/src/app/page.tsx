import Announcement from "@/components/Announcement";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LightRays from "@/components/LightRays";
import PromptInput from "@/components/PromptInput";
import ExamplePrompts from "@/components/ExamplePrompts";
import Stacks from "@/components/Stacks";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="relative flex-1 flex flex-col overflow-hidden">
        <LightRays />

        <div className="flex overflow-auto size-full flex-col relative">
          <Announcement />

          <div className="selection-accent flex flex-col flex-grow">
            <Hero />

            <PromptInput />

            <ExamplePrompts />
            <Stacks />

            <Footer />
          </div>
        </div>
      </main>
    </div>
  );
}
