import Splash from "../components/Splash/Splash";
import About from "../components/About/About";
import Featured from "../components/Featured/Featured";
import Contact from "../components/Contact/Contact";
import Wave from "../components/Wave/Wave";
import Navigation from "../components/Navigation/Navigation";

export default function Home() {
  return (
    <>
      <Splash />

      <Navigation color="hsla(0, 0%, 96%, 1)" />

      <main>
        <About />
        <Wave flipped="true" />
        <Featured />
        <Wave />
        <Contact />
        <Wave flipped="true" />
      </main>
    </>
  );
}
