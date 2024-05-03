import "../App.css";
import { useDispatch, useSelector } from "react-redux";
import { selectControls } from "../store/controls/selectors";
import { lampControl } from "../store/controls/slice";
import { radioPower } from "../store/controls/slice";
import { radioStationSelect } from "../store/controls/slice";
import { thermoControl } from "../store/controls/slice";

export default function Dashboard() {
  const dispatch = useDispatch();
  const controls = useSelector(selectControls);
  const handleChange = (event) => {
    dispatch(thermoControl(event.target.value));
  };
  const radioStations = [
    "classic rock",
    "pop 80's",
    "grunge",
    "techno",
    "metal",
    "world music",
    "classical",
    "easy listening",
    "jazz",
  ];

  return (
    <>
      <h2>Light Controls</h2>
      {controls.lamps.map((lamp) => {
        return (
          <div>
            <li key={controls.lamps.id}>
              Lamp #{lamp.id}{" "}
              <button onClick={() => dispatch(lampControl(lamp.id))}>
                {lamp.power ? "on" : "off"}
              </button>
            </li>
          </div>
        );
      })}
      <div>
        <h2>
          Radio Controls{" "}
          <button onClick={() => dispatch(radioPower())}>
            {controls.radio.power ? "on" : "off"}
          </button>
        </h2>
        <p>
          Now Playing:{" "}
          <select
            onChange={(e) => {
              dispatch(radioStationSelect(e.target.value));
            }}
          >
            {radioStations.map((rad) => (
              <option key={rad.key} value={rad}>
                {rad}
              </option>
            ))}
          </select>
        </p>
        <h2>
          Thermostat at{" "}
          <input
            type="number"
            id="input"
            min="1"
            max="45"
            value={controls.thermostat}
            onChange={handleChange}
          />{" "}
          degrees
        </h2>
      </div>
    </>
  );
}
