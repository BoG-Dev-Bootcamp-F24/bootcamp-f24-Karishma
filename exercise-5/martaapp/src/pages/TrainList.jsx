import Train from "../components/Train.jsx"; // Assuming we'll create a Train component later

export default function TrainList({ color, data }) {
  // Filter train data based on the line color passed as a prop
  const filteredTrains = data.filter(train => train.LINE === color.toUpperCase());

  return (
    <div>
      {filteredTrains.map(train => (
        <Train key={train.TRAIN_ID} {...train} />
      ))}
    </div>
  );
}
