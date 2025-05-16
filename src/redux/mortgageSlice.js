import { createSlice } from '@reduxjs/toolkit';

const mortgageSlice = createSlice({
  name: 'mortgage',
  initialState: {
    monthlyPayment: 0,
  },
  reducers: {
    setMonthlyPayment: (state, action) => {
      state.monthlyPayment = action.payload;
    },
  },
});

export const { setMonthlyPayment } = mortgageSlice.actions;
export default mortgageSlice.reducer;
