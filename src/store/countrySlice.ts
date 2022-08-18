import { Country } from './../types';
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

type Status = 'pending' | 'fulfilled' | 'rejected';

interface countryState {
  countries: Country[];
  status: Status;
  error: string | null;
}

const initialState: countryState = {
  countries: [],
  status: 'pending',
  error: null,
};

const BASE_URL = 'https://restcountries.com/v2/';
const ALL_COUNTRIES =
  BASE_URL + 'all?fields=name,capital,flags,population,region';

// export const searchByCountry = (name: string) => BASE_URL + 'name/' + name;
// export const filterByCode = (codes: string[]) =>
// 	BASE_URL + 'alpha?codes=' + codes.join(',');

export const getAllCountries = createAsyncThunk(
  'country/getAllCountries',
  async function (_, { rejectWithValue }) {
    try {
      const response = await axios.get<Country[]>(ALL_COUNTRIES);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error instanceof Error ? error.message : 'Something has gone wrong'
      );
    }
  }
);

const countrySlice = createSlice({
  name: 'country',
  initialState,
  reducers: {},
  extraReducers: {
    [getAllCountries.pending.type]: (state) => {
      state.status = 'pending';
      state.error = null;
    },
    [getAllCountries.fulfilled.type]: (
      state,
      action: PayloadAction<Country[]>
    ) => {
      state.status = 'fulfilled';
      state.countries = action.payload;
    },
    [getAllCountries.rejected.type]: (state, action: PayloadAction<string>) => {
      state.status = 'rejected';
      state.error = action.payload;
    },
  },
});

export default countrySlice.reducer;
