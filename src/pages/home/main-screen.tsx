import { useState } from 'react';
import { Header } from '../../components/header/header';
import { Hero } from '../../components/hero/hero';

export default function MainScreen(): React.ReactElement {
  const [triggerCount, setTriggerCount] = useState(0);

  const handleClick = () => {
    setTriggerCount((prev) => prev + 1);
  };

  return (
    <main>
      <Header onAnimateChips={handleClick} />
      <Hero triggerAnimation={triggerCount} />
    </main>
  );
}
