const [currColor, setCurrColor] = useState("red");
const [stationData, setStationData] = useState([]);
const [trainData, setTrainData] = useState([]);

useEffect(() => {
  const fetchData = async () => {
    const stations = await fetchStationData();
    const trains = await fetchTrainData();
    setStationData(stations.data);
    setTrainData(trains.data);
  };
  fetchData();
}, []);
