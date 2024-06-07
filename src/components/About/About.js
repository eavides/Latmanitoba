import about from "../../images/about.jpg";
function About({ t }) {
  return (
    <section id="about">
      <h1 className="about__title">{t("Titabout")}</h1>
      <p className="about__description">{t("Description")}</p>
      <img src={about} className="about__img"></img>
      <h2 className="about__titmiss">{t("Titmision")}</h2>
      <p className=" about__desmis">{t("Mision")}</p>
      <h2 className="about__titvis">{t("Titvision")}</h2>
      <p className="about__desvis">{t("Vision")}</p>
    </section>
  );
}

export default About;
