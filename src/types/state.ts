import type { store } from '../store/store';
import type { NamedAPIResource, Pokemon } from './pokemon';

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type PockemonsProcess = {
    pockemons: NamedAPIResource[];
    isLoading: boolean;
    hasError: boolean;
}

export type DetailedPockemonProcess = {
    detailedPockemon: Pokemon | null;
    isLoading: boolean;
    hasError: boolean;
    activeSpriteIndex: number;
}
