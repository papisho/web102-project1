import './App.css'
import Header from './components/Header'
import TrailCard from './components/TrailCard'
import trails from './data/trails'

function App() {
  return (
    <div className="app">
      <Header />
      <main className="card-grid">
        {trails.map((trail) => (
          <TrailCard
            key={trail.id}
            name={trail.name}
            location={trail.location}
            difficulty={trail.difficulty}
            distance={trail.distance}
            elevationGain={trail.elevationGain}
            description={trail.description}
            image={trail.image}
            link={trail.link}
          />
        ))}
      </main>
    </div>
  )
}

export default App
