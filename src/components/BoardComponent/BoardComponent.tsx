import React, { FC, useEffect, useState } from "react";
import { Board } from "../../models/Board";
import { Cell } from "../../models/Cell";
import { Colors } from "../../models/Colors";
import { Player } from "../../models/Player";
import CellComponent from "./CellComponent";

interface BoardProps {
  board: Board;
  carrentPlayer: Player | null;
  setBoard: (board: Board) => void;
  swapPlayer: () => void;
}

const BoardComponent: FC<BoardProps> = ({ board, carrentPlayer, setBoard, swapPlayer }) => {
  const [selectedCell, setSelectedCell] = useState<Cell | null>(null);


  console.log(board)
  useEffect(() => {
    hightlightCells();
  }, [selectedCell]);

  function click(cell: Cell) {
    if (selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)) {
      selectedCell.moveFigure(cell);
      swapPlayer();
      setSelectedCell(null);
    } else {
      if (cell.figure?.color === carrentPlayer?.color) {
        setSelectedCell(cell);
      }

    }
  }

  function hightlightCells() {
    board.hightlightCells(selectedCell);
    updateBoard();
  }

  function updateBoard() {
    const newBoard = board.getCopyBoard();
    setBoard(newBoard);
  }

  return (
    <div>
      <h3>Ход: {carrentPlayer?.color === Colors.WTHITE ? 'белых' : 'черных'}</h3>
      <div className='board'>
        {board.cells.map((row, index) => (
          <React.Fragment key={index}>
            {row.map((cell) => (
              <CellComponent cell={cell}
                click={click}
                selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y}
                key={cell.id} />
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>

  );
}

export default BoardComponent;