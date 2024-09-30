import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

const initialState = {
  carFilters: {},
  totalCars: 0,
  page: 1,
  pageSize: 6,
};

const carFiltersSlice = createSlice({
  name: "carFilters",
  initialState,
  reducers: {
    setFilters: (state, action) => {
      state.carFilters = action.payload;
    },
    setCarsCount: (state, action) => {
      state.totalCars = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setPageSize: (state, action) => {
      state.pageSize = action.payload;
    },
    clearFilter: () => initialState,
  },
});

export const {
  setFilters,
  setCarsCount,
  setPage,
  setPageSize,
} = carFiltersSlice.actions;

export default carFiltersSlice.reducer;

export const selectCurrentFilters = (state: RootState) =>
  state.carFilters.carFilters;
export const selectCarsCount = (state: RootState) =>
  state.carFilters.totalCars;
export const selectPage = (state: RootState) => state.carFilters.page;
export const selectPageSize = (state: RootState) =>
  state.carFilters.pageSize;
