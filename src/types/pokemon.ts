export interface NamedAPIResource {
    name: string;
    url?: string;
}

export interface PokemonStat {
    base_stat: number;
    effort: number;
    stat: NamedAPIResource;
}

export interface PokemonType {
    slot: number;
    type: NamedAPIResource;
}

export interface PokemonAbility {
    ability: NamedAPIResource;
    is_hidden: boolean;
    slot: number;
}

export interface PokemonMove {
    move: NamedAPIResource;
}

export interface PokemonSprites {
    front_default: string | null;
    back_default: string | null;
    front_shiny: string | null;
    back_shiny?: string | null;
    other?: {
        "official-artwork"?: {
            front_default: string | null;
            front_shiny?: string | null;
        };
        home?: {
            front_default: string | null;
            front_shiny?: string | null;
        };
        showdown?: {
            front_default: string | null;
            front_shiny?: string | null;
        };
    };
}

export interface Pokemon {
    id: number;
    name: string;
    height: number;
    weight: number;
    base_experience: number;
    order: number;
    is_default: boolean;
    sprites: PokemonSprites;
    stats: PokemonStat[];
    types: PokemonType[];
    abilities: PokemonAbility[];
    moves: PokemonMove[];
}