import Board from "../Members/Board.js";
import InfoPopup from "../InfoPopup/InfoPopup.js";
import React, { useState } from "react";
function Members({ t }) {
  const [selectedmember, setSelectedmember] = useState(null);
  const [winclose, setWinclose] = useState(false);
  function clicked(member) {
    setSelectedmember(member);
    setWinclose(!winclose);
  }
  function closeAllPopups() {
    setWinclose(!winclose);
  }

  return (
    <section id="members">
      <div className="members__container">
        <h1 className="members__title">{t("Titmember")}</h1>
        <Board clicked={clicked} onClose={closeAllPopups} />
        <InfoPopup
          selectedmember={selectedmember}
          onClose={closeAllPopups}
          winclose={winclose}
        />
      </div>
    </section>
  );
}

export default Members;
