import { RootState } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";

const initialState = window.innerWidth > 1023;

const deviceTypeSlice = createSlice({
  name: "deviceType",
  initialState,
  reducers: {
    setDeviceType: (state) => {
      return (state = !state);
    },
  },
});

export const { setDeviceType } = deviceTypeSlice.actions;
export default deviceTypeSlice.reducer;
export const selectCurrentDevice = (state: RootState) => state.deviceType;
