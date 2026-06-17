import type { PokemonSprites } from '../types/pokemon';

const SPRITE_KEYS = [
  'front_default',
  'back_default',
  'front_shiny',
  'back_shiny',
] as const;

const SPRITE_PATHS = [
  ['other', 'official-artwork', 'front_default'],
  ['other', 'official-artwork', 'front_shiny'],
  ['other', 'home', 'front_default'],
  ['other', 'home', 'front_shiny'],
  ['other', 'showdown', 'front_default'],
  ['other', 'showdown', 'front_shiny'],
] as const;

export function collectSprites(sprites: PokemonSprites | undefined): string[] {
  if (!sprites) return [];

  const directUrls: string[] = SPRITE_KEYS
    .map((key) => sprites[key])
    .filter((url): url is string => typeof url === 'string' && url.length > 0);

  const nestedUrls: string[] = SPRITE_PATHS
    .map((path) => {
        //ПРИДЕТСЯ ИСПОЛЬЗОВАТЬ НЕОПРЕДЕЛЕННЫЙ ТИП, ЧТОБЫ ПРОЙТИ ЧЕРЕЗ НЕИЗВЕСТНУЮ ГЛУБИНУ ОБЪЕКТА СПРАЙТОВ!
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      let current: any = sprites;
      for (const key of path) {
        if (current == null || typeof current !== 'object') return null;
        current = current[key];
      }
      return typeof current === 'string' ? current : null;
    })
    .filter((url): url is string => url !== null);

  return [...directUrls, ...nestedUrls];
}