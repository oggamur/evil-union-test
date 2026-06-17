import { POCKEMON_NAMES } from "../../mock/mock";

export function ChipList(): React.ReactElement {
    return (
        <div className="chip-list">
            {Object.values(POCKEMON_NAMES).map((name) => (
                <button className="chip" key={name}>
                    {name}
                </button>
            ))}
        </div>
    );
}