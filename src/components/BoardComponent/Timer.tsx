import { FC, useEffect, useRef, useState } from "react";
import { Colors } from "../../models/Colors";
import { Player } from "../../models/Player";


interface TimerProps {
  carrentPlayer: Player | null; 
  restart: () => void;
}

const Timer: FC<TimerProps> = ({ carrentPlayer, restart }) => {
  const [whiteTime, setWhiteTime] = useState(300);
  const [blackTime, setBlackTime] = useState(300);
  const timer = useRef<null | ReturnType<typeof setInterval>>(null);

  function startTimer() {
    if (timer.current) {
      clearInterval(timer.current)
    }
    const callback = carrentPlayer?.color === Colors.WTHITE ? decrementWhiteTimer :
      decrementBlackTimer
    timer.current = setInterval(callback, 1000)
  } 
  function decrementWhiteTimer() {
    setWhiteTime(prev => prev - 1)
  }
  function decrementBlackTimer() {
    setBlackTime(prev => prev - 1)
  }

  useEffect(() => {
    startTimer();
  }, [carrentPlayer])

  const handleRestart = () =>{
    setWhiteTime(300);
    setBlackTime(300);
    restart();
  }
  return (
    <div>
      <div>
        <button onClick={handleRestart}>Restart game</button>
      </div>
      <h2>белые - {whiteTime}</h2>
      <h2>черные - {blackTime}</h2>
    </div>
  )
}

export default Timer;