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
        <div className="timer">
            <div className="timer__controls">
                <input
                    type="number"
                    value={time}
                    onChange={(e) => setTime(Number(e.target.value))}
                    className="timer__input"
                />
                <button className="timer__button" onClick={handleStart}>Start</button>
                <button className="timer__button" onClick={handleStop}>Stop</button>
                <button className="timer__button" onClick={handleReset}>Reset</button>
            </div>
            <div className="timer__container">
                <CountdownCircleTimer
                    key={timerKey}
                    isPlaying={isRunning}
                    duration={time}
                    colors="#FF0000"
                    onComplete={handleStop}
                    size={380}
                    strokeWidth={25}
                /* trailColor="#151932" */
                >
                    {({ remainingTime }) => (
                        <div className="timer__time">
                            <div className="timer__text">{formatTime(remainingTime)}</div>
                        </div>
                    )}
                </CountdownCircleTimer>
            </div>
        </div>
    );
};

export default Timer;
