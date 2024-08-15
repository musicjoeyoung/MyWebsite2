import "./Timer.scss";

import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useState } from "react";

const Timer: React.FC = () => {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [timerKey, setTimerKey] = useState(0);

    const handleStart = (): void => {
        setIsRunning(true);
    };

    const handleStop = (): void => {
        setIsRunning(false);
    };

    const handleReset = (): void => {
        setTime(0);
        setIsRunning(false);
        setTimerKey((prevKey: number): number => prevKey + 1);
    };

    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes}:${seconds.toString().padStart(2, "0")}`;
    };

    return (
        <div>
            <div>
                <input
                    type="number"
                    value={time}
                    onChange={(e) => setTime(Number(e.target.value))}
                />
                <button onClick={handleStart}>Start</button>
                <button onClick={handleStop}>Stop</button>
                <button onClick={handleReset}>Reset</button>
            </div>
            <div className="timer-container">
                <CountdownCircleTimer
                    key={timerKey}
                    isPlaying={isRunning}
                    duration={time}
                    colors="#FF0000"
                    onComplete={handleStop}
                >
                    {({ remainingTime }) => (
                        <div className="timer">
                            <div className="text">{formatTime(remainingTime)}</div>
                        </div>
                    )}
                </CountdownCircleTimer>
            </div>
        </div>
    );
};

export default Timer;
