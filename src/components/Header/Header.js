import traslate from "../../images/globe.svg";
function Header({ changeLanguage, setLang, langu }) {
  function Clicked(lan) {
    setLang(lan);
    changeLanguage(lan);
  }
  return (
    <div className="header__container">
      <div className="traslate">
        <img className="traslate__img" src={traslate} alt="icono mundo"></img>
        <a
          href={"#"}
          className={`traslate__es ${
            langu === "es" ? "traslate__select" : ""
          } `}
          onClick={() => Clicked("es")}
        >
          Español
        </a>
        <h3 className="traslate__div">/</h3>
        <a
          href="#"
          className={`traslate__en ${
            langu === "en" ? "traslate__select" : ""
          } `}
          onClick={() => Clicked("en")}
        >
          English
        </a>
      </div>
    </div>
  );
}

export default Header;
