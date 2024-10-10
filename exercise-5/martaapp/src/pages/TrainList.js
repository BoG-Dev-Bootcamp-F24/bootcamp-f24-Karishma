export default function TrainList({ color, data }) {
    const filteredTrains = data.filter(train => train.LINE === color.toUpperCase());
    return (
      <div>
        {filteredTrains.map(train => (
          <Train key={train._id} {...train} />
        ))}
      </div>
    );
  }
  