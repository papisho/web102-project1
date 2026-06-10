function TrailCard({
  name,
  location,
  difficulty,
  distance,
  elevationGain,
  description,
  image,
  link,
}) {
  return (
    <article className="card">
      <img className="card-image" src={image} alt={name} />
      <div className="card-body">
        <span className={`card-difficulty difficulty-${difficulty.toLowerCase()}`}>
          {difficulty}
        </span>
        <h2 className="card-name">{name}</h2>
        <p className="card-location">📍 {location}</p>
        <p className="card-description">{description}</p>
        <div className="card-stats">
          <span>🥾 {distance}</span>
          <span>⛰️ {elevationGain}</span>
        </div>
        <a className="card-link" href={link} target="_blank" rel="noreferrer">
          View Trail
        </a>
      </div>
    </article>
  )
}

export default TrailCard
