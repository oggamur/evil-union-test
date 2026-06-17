import clickHandSvg from '../../assets/img/click-hand.svg';

export function Header(): React.ReactElement {
  return (
    <header>
      <div className="logo">
        <p>ПОКЕМОНЫ API</p>
      </div>
      <button className='click-button'>
        <img src={clickHandSvg} alt="Menu" />
        <p>Нажмите на<br />нужного Покемона</p>
      </button>
    </header>
  );
}
