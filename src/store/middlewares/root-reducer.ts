import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { pockemonsProcess } from '../pockemons/pockemons-process';
import { detailedPockemonProcess } from '../detailed-pockemon/detailed-pockemon-process';

export const rootReducer = combineReducers({
  [NameSpace.Pockemons]: pockemonsProcess.reducer,
  [NameSpace.DetailedPockemon]: detailedPockemonProcess.reducer,
});
