import { useEffect, useState } from 'react';
import './App.css';
import BoardComponent from './components/BoardComponent/BoardComponent';
import LostFigures from './components/BoardComponent/LostFigures';
import Timer from './components/BoardComponent/Timer';
import { Board } from './models/Board';
import { Colors } from './models/Colors';
import { Player } from './models/Player';

function App() {
  const [board, setBoard] = useState(new Board())
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [whitePlayer, setWhitePlayer] = useState(new Player(Colors.WTHITE))
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [blackPlayer, setBlackPlayer] = useState(new Player(Colors.BLACK))
  const [carrentPlayer, setcarrenPlayer] = useState<Player | null>(null)

  useEffect(() => {
    restart();
    setcarrenPlayer(whitePlayer);
  }, []);

  function swapPlayer() {
    setcarrenPlayer(carrentPlayer?.color === Colors.WTHITE ? blackPlayer : whitePlayer)
  }
  function restart() {
    const newBoard = new Board();
    newBoard.initCells();
    newBoard.addFigures();

    setBoard(newBoard);
  }


  return (
    <div className="app">
      <Timer carrentPlayer={carrentPlayer} restart={restart}/>
      <BoardComponent board={board} setBoard={setBoard} swapPlayer={swapPlayer} carrentPlayer={carrentPlayer} />
      <div>
        <LostFigures title='Потери белых' figures={board.lostWhiteFigures} />
        <LostFigures title='Потери черных' figures={board.lostBlackFigures} />
      </div>
    </div>
  );
}

export default App;
