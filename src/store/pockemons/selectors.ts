import type { State } from '../../types/state';
import { NameSpace } from '../../const';

export const selectPockemons = (state: Pick<State, typeof NameSpace.Pockemons>) =>
  state[NameSpace.Pockemons].pockemons;

export const selectPockemonsLoading = (state: Pick<State, typeof NameSpace.Pockemons>) =>
  state[NameSpace.Pockemons].isLoading;

export const selectPockemonsError = (state: Pick<State, typeof NameSpace.Pockemons>) =>
  state[NameSpace.Pockemons].hasError;