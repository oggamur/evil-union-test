import type { State } from '../../types/state';
import { NameSpace } from '../../const';

export const selectDetailedPockemon = (state: Pick<State, typeof NameSpace.DetailedPockemon>) =>
  state[NameSpace.DetailedPockemon].detailedPockemon;

export const selectDetailedPockemonLoading = (state: Pick<State, typeof NameSpace.DetailedPockemon>) =>
  state[NameSpace.DetailedPockemon].isLoading;

export const selectDetailedPockemonError = (state: Pick<State, typeof NameSpace.DetailedPockemon>) =>
  state[NameSpace.DetailedPockemon].hasError;

export const selectActiveSpriteIndex = (state: Pick<State, typeof NameSpace.DetailedPockemon>) =>
  state[NameSpace.DetailedPockemon].activeSpriteIndex;
