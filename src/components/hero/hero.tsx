import { ChipList } from "../chip-list/chip-list";
import { PockemonStats } from "../pockemon-stats/pockemon-stats";

export function Hero(): React.ReactElement {
    return (
        <section className="hero">
            <ChipList></ChipList>
            <PockemonStats></PockemonStats>
        </section>
    );
}