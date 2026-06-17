import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import type { PockemonsProcess } from '../../types/state';
import { fetchPockemonsAction } from '../api-actions';

const initialState: PockemonsProcess = {
  pockemons: [],
  isLoading: false,
  hasError: false,
};

export const pockemonsProcess = createSlice({
  name: NameSpace.Pockemons,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPockemonsAction.pending, (state) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(fetchPockemonsAction.fulfilled, (state, action) => {
        state.pockemons = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchPockemonsAction.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      });
  },
});