import closeIcon from "../../images/Close.png";

function InfoPopup({ selectedmember, onClose, winclose }) {
  return (
    <>
      {selectedmember ? (
        <div
          className={`infopopup ${winclose ? "infopopup_opened" : ""} `}
          onClick={onClose}
        >
          <div className="infopopup__content">
            <div className="infopopup__content-button">
              <img
                alt="closeIcon"
                className="infopopup__content-buttonimg"
                src={closeIcon}
                onClick={onClose}
              />
            </div>
            <img
              alt="persona"
              className="infopopup__member"
              src={new URL(`http://localhost:3000/${selectedmember.link}`)}
            />
            <h1 className="infopopup__name">{selectedmember.name}</h1>
            <h2 className="infopopup__position">{selectedmember.position}</h2>
            <p className="infopopup__description">
              {selectedmember.description}
            </p>
          </div>
        </div>
      ) : (
        <p></p>
      )}
    </>
  );
}
export default InfoPopup;
