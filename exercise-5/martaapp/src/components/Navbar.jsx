// src/components/NavBar.jsx
import "../index.css"; // Common styles

export default function NavBar({ color, data }) {
  return (
    <div className="navbar-container">
      <h2>Current Line: {color}</h2>
      <select className="station-select">
        <option value="all">All Stations</option>
        {data.map((station, index) => (
          <option key={index} value={station}>
            {station}
          </option>
        ))}
      </select>
    </div>
  );
}
