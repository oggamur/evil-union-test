import { useAppSelector, useAppDispatch } from '../../hooks';
import { selectDetailedPockemon, selectActiveSpriteIndex } from '../../store/detailed-pockemon/selectors';
import { nextSprite } from '../../store/detailed-pockemon/detailed-pockemon-process';
import { collectSprites } from '../../logic/collect-sprites';

export function PockemonStats(): React.ReactElement {
  const pockemon = useAppSelector(selectDetailedPockemon);
  const activeIndex = useAppSelector(selectActiveSpriteIndex);
  const dispatch = useAppDispatch();

  const spriteUrls = collectSprites(pockemon?.sprites);
  const safeIndex = activeIndex % (spriteUrls.length || 1);

  const handleClick = () => {
    dispatch(nextSprite());
  };

  if (!pockemon) {
    return (
      <div className="pockemon-stats">
        <h2 className="pockemon-stats__name">Выберите покемона</h2>
      </div>
    );
  }

  const { id, name, height, weight, stats } = pockemon;

  return (
    <div className="pockemon-stats">
      <h2 className="pockemon-stats__name">
        {name[0].toUpperCase() + name.slice(1)}
      </h2>
      <div
        className="pockemon-stats__picture"
        style={{
          backgroundImage: `url(${spriteUrls[safeIndex] ?? ''})`,
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
                attack:{' '}
                {stats.find((s) => s.stat.name === 'attack')?.base_stat ?? '—'}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
