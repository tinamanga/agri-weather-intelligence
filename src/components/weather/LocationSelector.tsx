type Props = {
    onSelect: (lat: number, lon: number) => void;
  };
  
  const locations = [
    {
      city: "Nairobi",
      lat: -1.2921,
      lon: 36.8219,
    },
    {
      city: "Mombasa",
      lat: -4.0435,
      lon: 39.6682,
    },
    {
      city: "Kisumu",
      lat: -0.0917,
      lon: 34.7680,
    },
  ];
  
  export default function LocationSelector({
    onSelect,
  }: Props) {
    return (
      <div className="flex gap-4 mb-6">
        {locations.map((location) => (
          <button
            key={location.city}
            onClick={() =>
              onSelect(location.lat, location.lon)
            }
            className="px-4 py-2 rounded bg-blue-600 text-white"
          >
            {location.city}
          </button>
        ))}
      </div>
    );
  }