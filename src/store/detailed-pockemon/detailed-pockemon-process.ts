import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import type { DetailedPockemonProcess } from '../../types/state';
import { fetchDetailedPockemonAction } from '../api-actions';

const initialState: DetailedPockemonProcess = {
  detailedPockemon: null,
  cache: {},
  isLoading: false,
  hasError: false,
  activeSpriteIndex: 0,
};

export const detailedPockemonProcess = createSlice({
  name: NameSpace.DetailedPockemon,
  initialState,
  reducers: {
    nextSprite(state) {
      state.activeSpriteIndex += 1;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchDetailedPockemonAction.pending, (state) => {
        state.isLoading = true;
        state.hasError = false;
        state.activeSpriteIndex = 0;
      })
      .addCase(fetchDetailedPockemonAction.fulfilled, (state, action) => {
        state.detailedPockemon = action.payload;
        state.cache[action.meta.arg] = action.payload;
        // кэширование покемона по имени в объекте cache, с картинками делать так не будем, браузер сам кэширует
        state.isLoading = false;
      })
      .addCase(fetchDetailedPockemonAction.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      });
  },
});

export const { nextSprite } = detailedPockemonProcess.actions;
