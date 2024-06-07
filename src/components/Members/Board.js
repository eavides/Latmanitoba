import React, { useState, useEffect } from "react";
import boardData from "../../json/board.json"; // Adjust the path as needed

function Board({ clicked }) {
  const [boardMembers, setBoardMembers] = useState([]);

  useEffect(() => {
    setBoardMembers(boardData.board);
  }, []);

  return (
    <div className="board-container">
      {boardMembers.map((member) => (
        <div
          key={member.id}
          className="board-card"
          onClick={() => clicked(member)}
        >
          <h2 className="board-cardName">{member.name}</h2>
          <p className="board-cardPosition">{member.position}</p>
        </div>
      ))}
    </div>
  );
}

export default Board;
