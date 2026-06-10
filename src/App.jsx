import './App.css'
import Header from './components/Header'
import TrailCard from './components/TrailCard'
import trails from './data/trails'

function App() {
  const firstTrail = trails[0]

  return (
    <div className="app">
      <Header />
      <TrailCard
        name={firstTrail.name}
        location={firstTrail.location}
        difficulty={firstTrail.difficulty}
        distance={firstTrail.distance}
        elevationGain={firstTrail.elevationGain}
        description={firstTrail.description}
        image={firstTrail.image}
        link={firstTrail.link}
      />
    </div>
  )
}

export default App
