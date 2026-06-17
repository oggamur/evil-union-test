import { useEffect, useRef, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { selectPockemons } from '../../store/pockemons/selectors';
import { fetchDetailedPockemonAction } from '../../store/api-actions';

type ChipListProps = {
  triggerAnimation?: number;
};

export function ChipList({ triggerAnimation }: ChipListProps): React.ReactElement {
  const pockemons = useAppSelector(selectPockemons);
  const dispatch = useAppDispatch();
  const listRef = useRef<HTMLDivElement>(null);
  const [, setVersion] = useState(0);

  const handleClick = (name: string) => {
    dispatch(fetchDetailedPockemonAction(name));
  };

  useEffect(() => {
    if (triggerAnimation === undefined) return;
    const container = listRef.current;
    if (!container) return;

    const chips = container.querySelectorAll('.chip');
    chips.forEach((chip, i) => {
      const el = chip as HTMLElement;
      el.style.animation = 'none';
      void el.offsetHeight;
      el.style.animation = `bounceIn 0.4s ease-out ${i * 0.03}s both`;
    });
    setVersion((v) => v + 1);
  }, [triggerAnimation]);

  return (
    <div className="chip-list" ref={listRef} key={triggerAnimation}>
      {pockemons.map((pockemon) => (
        <button
          className="chip"
          key={pockemon.name}
          onClick={() => handleClick(pockemon.name)}
        >
          {pockemon.name[0].toUpperCase() + pockemon.name.slice(1)}
        </button>
      ))}
    </div>
  );
}
