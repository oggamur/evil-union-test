import { ChipList } from '../chip-list/chip-list';
import { PockemonStats } from '../pockemon-stats/pockemon-stats';

type HeroProps = {
  triggerAnimation?: number;
};

export function Hero({ triggerAnimation }: HeroProps): React.ReactElement {
  return (
    <section className="hero">
      <ChipList triggerAnimation={triggerAnimation} />
      <PockemonStats />
    </section>
  );
}
