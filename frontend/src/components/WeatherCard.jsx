function WeatherCard({ city, data, loading }) {
  if (loading) return (
    <div className="note-card">
      <strong>{city}</strong>
      <p>Loading weather...</p>
    </div>
  );

  if (!data) return null;

  return (
    <div className="note-card">
      <h3>{city}</h3>
      <p>Temperature: {data.temperature}</p>
      <p>Wind: {data.wind}</p>
      <p>Description: {data.description}</p>
    </div>
  );
}

export default WeatherCard;