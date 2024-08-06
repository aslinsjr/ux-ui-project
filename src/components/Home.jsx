import './Home.css'

const Home = () => {

  return (
    <div className='home-container'>
      <div className="logo-container">
      <h2>Soluções</h2>
      <h1><img src="./logo-white.png" alt="Logo Image" />arpa</h1>
      <p>Cuidando dos momentos mais difíceis e semeando seus investimentos para colheita futura.</p>
      </div>
      <img id='capsula' src="./capsula.png" alt="" />
    </div>
  )
}

export default Home