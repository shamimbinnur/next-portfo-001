import Contacts from "./components/Contacts";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import WorkingEx from "./components/WorkingEx";
import Head from "next/head"

export default function Home() {
  return (
    <div className="font-poppins ">
      <Head>
        <title>Next portfo 001</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Nav/>
      <Hero/>
      <Services/>
      <WorkingEx/>
      <Projects/>
      <Testimonials/>
      <Contacts/>
    </div>
  )
}
