import satData from "./satData";


const Buttons = ({ filterByType, setSat, displaySats }) => {
  return (
    <div className="flex-container">
      <button onClick={() => setSat(satData)}>All Orbits</button>

           {displaySats.map((sat, id) => (
        <button key={id} onClick={() => filterByType(sat)}>
          {sat} Orbit
        </button>
      ))}
    </div>
  );
};

export default Buttons;