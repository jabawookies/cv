import Head from "next/head";
import Link from "next/link";
import Header from "@/components/header";
import Hero from "@/components/Hero";
import About from "@/components/about";
import WorkExperience from "@/components/WorkExperience";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white min-h-screen">
      <Head>
        <title>Petre Sergiu Adrian</title>
      </Head>

      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section id="hero">
        <Hero />
      </section>

      {/* About Section */}
      <section id="About">
        <About />
      </section>

      {/* Experience Section */}
      <section id="Experience">
        <WorkExperience />
      </section>

      {/* Skills Section */}
      <section id="Skills">
        <Skills />
      </section>

      {/* Projects Section */}
      <section id="Projects">
        <Projects />
      </section>

      {/* Contact Section */}
      <section id="Contact">
        <Contact />
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 filter grayscale hover:grayscale-0"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 15.75L12 8.25l7.5 7.5"
              />
            </svg>
          </div>
        </footer>
      </Link>
    </div>
  );
}