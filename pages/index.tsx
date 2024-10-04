import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import Header from "@/components/header";
import Hero from "@/components/Hero";
import About from "@/components/about";
import WorkExperience from "@/components/WorkExperience";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Contact from "@/components/Contact";
import Link from "next/link";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <div className="scroll-smooth bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll
    z-0 overflow-x-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab8a]">
      <Head>
        <title>Petre Sergiu Adrian</title>
      </Head>

      {/* Header */}
      <Header />
      {/* Hero */}
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      {/* About */}
      <section id='About' className="snap-center">
        <About />
      </section>
      {/* Experience */}
      <section id='Experience' className="snap-center">
        <WorkExperience />
      </section>
      {/* Skills */}
      <section id='Skills' className="snap-start" >
        <Skills />
      </section>
      {/* Projects */}
      <section id="Projects" className="snap-start">
        <Projects />
      </section>

      {/* Contact */}
      <section id="Contact" className="snap-start">
        <Contact />
      </section>
      <Link href='#hero'>
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8
  filter grayscale hover:grayscale-0">
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
            </svg>

          </div>
        </footer>

      </Link>

    </div>
  );
}
