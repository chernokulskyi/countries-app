import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import {
  ALL_COUNTRIES_URL,
  Country,
  COUNTRY_BY_NAME_URL,
  NEIGHBORS_BY_CODES_URL,
  Status,
} from './../types';

interface countryState {
  countries: Country[];
  status: Status;
  error: string | null;

  selectedCountry: Country | null;
  countryNeighbors: Country[] | null;
  countryStatus: Status;
  countryError: string | null;
}

const initialState: countryState = {
  countries: [],
  status: 'unknown',
  error: null,

  selectedCountry: null,
  countryNeighbors: null,
  countryStatus: 'unknown',
  countryError: null,
};

export const getAllCountries = createAsyncThunk(
  'country/getAllCountries',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get<Country[]>(ALL_COUNTRIES_URL);

      return data;
    } catch (error) {
      return rejectWithValue(
        error instanceof Error ? error.message : 'Something has gone wrong'
      );
    }
  }
);

export const getCountryByName = createAsyncThunk(
  'country/getCountryByName',
  async (name: string, { rejectWithValue }) => {
    try {
      const { data } = await axios.get<Country[]>(COUNTRY_BY_NAME_URL(name));

      return data;
    } catch (error) {
      return rejectWithValue(
        error instanceof Error ? error.message : 'Something has gone wrong'
      );
    }
  }
);

export const getNeighborsByCodes = createAsyncThunk(
  'country/getNeighborsByCodes',
  async (codes: string[], { rejectWithValue }) => {
    try {
      const { data } = await axios.get<Country[]>(
        NEIGHBORS_BY_CODES_URL(codes)
      );

      return data;
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

    [getCountryByName.pending.type]: (state) => {
      state.countryStatus = 'pending';
      state.countryError = null;
    },
    [getCountryByName.fulfilled.type]: (
      state,
      action: PayloadAction<Country[]>
    ) => {
      state.countryStatus = 'fulfilled';
      state.selectedCountry = action.payload[0];
    },
    [getCountryByName.rejected.type]: (
      state,
      action: PayloadAction<string>
    ) => {
      state.countryStatus = 'rejected';
      state.countryError = action.payload;
    },

    [getNeighborsByCodes.pending.type]: (state) => {
      state.countryStatus = 'pending';
      state.countryError = null;
    },
    [getNeighborsByCodes.fulfilled.type]: (
      state,
      action: PayloadAction<Country[]>
    ) => {
      state.countryStatus = 'fulfilled';
      state.countryNeighbors = action.payload;
    },
    [getNeighborsByCodes.rejected.type]: (
      state,
      action: PayloadAction<string>
    ) => {
      state.countryStatus = 'rejected';
      state.countryError = action.payload;
    },
  },
});

export default countrySlice.reducer;
