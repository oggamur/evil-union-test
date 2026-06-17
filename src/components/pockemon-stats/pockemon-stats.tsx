import { useState, useCallback } from "react";
import { BULBASAUR_MOCK } from "../../mock/mock";

function collectSprites(sprites: typeof BULBASAUR_MOCK.sprites): string[] {
    const urls: string[] = [];
    if (sprites.front_default) urls.push(sprites.front_default);
    if (sprites.back_default) urls.push(sprites.back_default);
    if (sprites.front_shiny) urls.push(sprites.front_shiny);
    if (sprites.back_shiny) urls.push(sprites.back_shiny);
    if (sprites.other?.["official-artwork"]?.front_default)
        urls.push(sprites.other["official-artwork"].front_default);
    if (sprites.other?.["official-artwork"]?.front_shiny)
        urls.push(sprites.other["official-artwork"].front_shiny);
    if (sprites.other?.home?.front_default)
        urls.push(sprites.other.home.front_default);
    if (sprites.other?.home?.front_shiny)
        urls.push(sprites.other.home.front_shiny);
    if (sprites.other?.showdown?.front_default)
        urls.push(sprites.other.showdown.front_default);
    if (sprites.other?.showdown?.front_shiny)
        urls.push(sprites.other.showdown.front_shiny);
    return urls;
}

export function PockemonStats(): React.ReactElement {
    const { id, name, height, weight, stats, sprites } = BULBASAUR_MOCK;
    const spriteUrls = collectSprites(sprites);
    const [activeIndex, setActiveIndex] = useState(0);

    const handleClick = useCallback(() => {
        setActiveIndex((prev) => (prev + 1) % spriteUrls.length);
    }, [spriteUrls.length]);

    return (
        <div className="pockemon-stats">
            <h2 className="pockemon-stats__name">
                {name[0].toUpperCase() + name.slice(1)}
            </h2>
            <div
                className="pockemon-stats__picture"
                style={{
                    backgroundImage: `url(${spriteUrls[activeIndex] ?? ""})`,
                }}
                onClick={handleClick}
            />
            <div className="pockemon-stats__table">
                <table>
                    <tbody>
                        <tr>
                            <td>id: {id}</td>
                        </tr>
                        <tr>
                            <td>height: {height}</td>
                        </tr>
                        <tr>
                            <td>weight: {weight}</td>
                        </tr>
                        <tr>
                            <td>
                                attack:{" "}
                                {stats.find((s) => s.stat.name === "attack")?.base_stat ?? "—"}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
