import { createAsyncThunk } from '@reduxjs/toolkit';
import type { State } from '../types/state';
import type { AxiosInstance } from 'axios';
import { APIRoute, NameSpace } from '../const';
import type { NamedAPIResource, Pokemon } from '../types/pokemon';

export const fetchPockemonsAction = createAsyncThunk<
  NamedAPIResource[],
  undefined,
  {
    state: State;
    extra: AxiosInstance;
  }
>('pockemons/fetchPockemons', async (_arg, { extra: api }) => {
  const { data } = await api.get<{ results: NamedAPIResource[] }>(APIRoute.Pockemons);
  return data.results;
});

export const fetchDetailedPockemonAction = createAsyncThunk<
  Pokemon,
  string,
  {
    state: State;
    extra: AxiosInstance;
  }
>('detailedPockemon/fetchDetailedPockemon', async (name, { extra: api, getState }) => {
  const cached = getState()[NameSpace.DetailedPockemon].cache[name];
  if (cached) {
    return cached;
  }
  const { data } = await api.get<Pokemon>(`${APIRoute.DetailedPockemon}/${name}`);
  return data;
});
