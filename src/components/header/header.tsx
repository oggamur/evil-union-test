import clickHandSvg from '../../assets/img/click-hand.svg';

type HeaderProps = {
  onAnimateChips?: () => void;
};

export function Header({ onAnimateChips }: HeaderProps): React.ReactElement {
  return (
    <header>
      <div className="logo">
        <a href="https://pokeapi.co/">ПОКЕМОНЫ API</a>
      </div>
      <button className='click-button' onClick={onAnimateChips}>
        <img src={clickHandSvg} alt="Menu" />
        <p>Нажмите на<br />нужного Покемона</p>
      </button>
    </header>
  );
}
