import { useState } from 'react';

type SpriteProps = {
  src: string;
  alt: string;
};

export function Sprite({ src, alt }: SpriteProps): React.ReactElement {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && (
        <div className="pockemon-stats__loader">
          <div className="spinner" />
        </div>
      )}
      <img
        ref={(el) => {
          if (el?.complete) setLoaded(true);
        }}
        src={src}
        alt={alt}
        className={loaded ? 'loaded' : 'loading'}
        onLoad={() => setLoaded(true)}
      />
    </>
  );
}