import Carrusel from "../Carousel/Carousel"
import Favorites from "../Favorites/Favorites"

const Home = ({ greetings }) => {
  return (
    <main>
      <h2>{greetings}</h2>
      <Carrusel/>
        <p className="enunciado">
        Asesoria Informatica Integral
        <small>Auditorias ISO 27001</small>
        </p>
      <Favorites/>
    </main>
  )
}

export default Home
