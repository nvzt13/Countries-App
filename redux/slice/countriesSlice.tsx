import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { countriesData } from '../../data/Data';

export interface CounterState {
  filteredCountries: Array<any>
}

const initialState: CounterState = {
  filteredCountries: countriesData,

}

export const counterSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    setFilteredCountry(state, action: PayloadAction<any>) {
      state.filteredCountries = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setFilteredCountry } = counterSlice.actions

export default counterSlice.reducer