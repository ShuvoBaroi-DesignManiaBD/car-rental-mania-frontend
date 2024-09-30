import { RootState } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

const userMenuDrawerSLice = createSlice({
  name: "userMenuDrawer",
  initialState,
  reducers: {
    setShowUserMenuDrawer: (state) => {
      return (state = !state);
    },
  },
});

export const { setShowUserMenuDrawer } = userMenuDrawerSLice.actions;
export default userMenuDrawerSLice.reducer;
export const selectUserMenuDrawer = (state: RootState) => state.userMenuDrawer;
