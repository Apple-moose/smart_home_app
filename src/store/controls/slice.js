import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lamps: [
    { id: 1, power: false },
    { id: 2, power: false },
    { id: 3, power: false },
    { id: 4, power: false },
  ],
  radio: { genres: "classic rock", power: false },
  thermostat: 20,
};

export const controlsSlice = createSlice({
  name: "controls",
  initialState,
  reducers: {
    lampControl: (state, action) => {
      const lampID = action.payload;
      const toggleLamp = () => {
        state.lamps.find((l) => {
          if (l.id === lampID) {
            return l.power ? (l.power = false) : (l.power = true);
          }
        });
      };
      toggleLamp();
    },
    radioPower: (state) => {
      const toggleRadio = () => {
        return state.radio.power
          ? (state.radio.power = false)
          : (state.radio.power = true);
      };
      toggleRadio();
    },
    radioStationSelect: (state, action) => {
      state.radio.genres = action.payload;
    },
    thermoControl: (state, action) => {
      state.thermostat = action.payload;
    },
    resetDefault: (state) => {
      state = initialState;
    },
  },
});

export const {
  lampControl,
  radioPower,
  radioStationSelect,
  thermoControl,
  resetDefault,
} = controlsSlice.actions;
export default controlsSlice.reducer;
