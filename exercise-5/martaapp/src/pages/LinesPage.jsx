// src/pages/LinesPage.jsx
import { useState, useEffect } from "react";
import axios from "axios";
import TrainList from "../pages/TrainList.jsx";
import NavBar from "../components/Navbar.jsx";
import "../index.css"; // Common styles

// Fetch station and train data from the backend server
const fetchStationData = async () => await axios.get("http://localhost:5001/api/stations");
const fetchTrainData = async () => await axios.get("http://localhost:5001/api/trains");

export default function LinesPage() {
  const [currColor, setCurrColor] = useState("gold");
  const [stationData, setStationData] = useState([]);
  const [trainData, setTrainData] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const stations = await fetchStationData();
        const trains = await fetchTrainData();
        setStationData(stations.data);
        setTrainData(trains.data);
        setLoading(false);
      } catch (error) {
        console.error("Data fetching error:", error);
        setLoading(false); // Stop loading even if there is an error
      }
    };
    fetchData();
  }, []);

  return (
    <div className="lines-page">
      <NavBar color={currColor} data={stationData} />
      <h1 className="line-title">{currColor.toUpperCase()}</h1>
      <div className="button-group">
        <button>Arriving</button>
        <button>Scheduled</button>
        <button>Northbound</button>
        <button>Southbound</button>
      </div>
      {/* Display loading message if data is still being fetched */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <TrainList color={currColor} data={trainData} />
      )}
    </div>
  );
}
