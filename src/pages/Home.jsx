import Hero from "../components/home/Hero"
import Advantages from "../components/home/Advantages"
import Gallery from "../components/home/Gallery"
import CheckIn from "../components/home/CheckIn"
import Services from "../components/home/Services"
import useReveal from "../hooks/useReveal"

function Home() {
  useReveal()

  return (
    <main>
      <Hero />
      <Advantages />
      <Gallery />
      <CheckIn />
      <Services />
    </main>
  )
}

export default Home
