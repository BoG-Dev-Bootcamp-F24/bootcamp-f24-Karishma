export default function NavBar({ color, data }) {
    return (
      <nav>
        <select>
          {data.map(station => (
            <option key={station._id}>{station.name}</option>
          ))}
        </select>
      </nav>
    );
  }
  