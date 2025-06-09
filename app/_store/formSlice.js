import { createSlice } from "@reduxjs/toolkit";

const initialState = {
     minPrice: 5000,
     maxPrice: 20000,
     rating: 1,
     styles: {
          traditional: true,
          candid: true,
          studio: true,
          outdoor: true,
     },
     city: "all",
     sort: null,
};

export const formSlice = createSlice({
     name: "form",
     initialState: initialState,
     reducers: {
          changeMinPrice(state, action) {
               state.minPrice = parseInt(action.payload);
          },
          changeMaxPrice(state, action) {
               state.maxPrice = parseInt(action.payload);
          },
          changeRating(state, action) {
               state.rating = parseInt(action.payload);
          },
          changeTraditional(state, action) {
               state.styles.traditional = action.payload;
          },
          changeCandid(state, action) {
               state.styles.candid = action.payload;
          },
          changeStudio(state, action) {
               state.styles.studio = action.payload;
          },
          changeOutdoor(state, action) {
               state.styles.outdoor = action.payload;
          },
          changeCity(state, action) {
               state.city = action.payload;
          },
          changeSort(state, action) {
               state.sort = action.payload;
          },
          reset(state, action) {
               return { ...initialState };
          },
     },
});

export const {
     changeMaxPrice,
     changeMinPrice,
     changeRating,
     changeTraditional,
     changeCandid,
     changeStudio,
     changeOutdoor,
     changeCity,
     changeSort,
     reset,
} = formSlice.actions;
export default formSlice.reducer;
