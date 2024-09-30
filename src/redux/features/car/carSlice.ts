import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { TCar } from "@/types";

interface CarState {
  cars: TCar[]; // Add a property for filtered cars
}

const initialState: CarState = {
  cars: [], // Initialize as null
};

const carSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    setCars(state, action: PayloadAction<TCar[]>) {
      console.log(state, action);
      state.cars = action.payload;
    },
  },
});

export const { setCars } = carSlice.actions;

export default carSlice.reducer;

export const selectCurrentCars = (state: RootState) => state?.cars?.cars;
