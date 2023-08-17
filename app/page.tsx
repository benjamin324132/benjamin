import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import RecentWork from "@/components/RecentWork";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <RecentWork />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
