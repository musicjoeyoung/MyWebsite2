import "./Timer.scss";

import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useState } from "react";

const Timer: React.FC = () => {
    const [timeInput, setTimeInput] = useState("");
    const [duration, setDuration] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [timerKey, setTimerKey] = useState(0);

    const parseTimeInput = (input: string): number => {
        const trimmedInput = input.trim();
        const parts = trimmedInput.split(':').map(part => parseInt(part, 10));

        if (parts.length === 1) {
            const totalSeconds = parseInt(trimmedInput, 10);
            return isNaN(totalSeconds) ? 0 : totalSeconds;
        } else if (parts.length === 2) {
            return parts[0] * 60 + (parts[1] || 0);
        } else if (parts.length === 3) {
            return parts[0] * 3600 + parts[1] * 60 + (parts[2] || 0);
        }

        return 0;
    };

    const handleStart = (): void => {
        const parsedTime = parseTimeInput(timeInput);
        if (parsedTime > 0) {
            setDuration(parsedTime);
            setIsRunning(true);
            setTimerKey(prevKey => prevKey + 1);
        }
    };

    const handleStop = (): void => {
        setIsRunning(false);
    };

    const handleReset = (): void => {
        setTimeInput("");
        setDuration(0);
        setIsRunning(false);
        setTimerKey(prevKey => prevKey + 1);
    };

    const formatTime = (time: number): string => {
        const hours = Math.floor(time / 3600);
        const minutes = Math.floor((time % 3600) / 60);
        const seconds = time % 60;

        if (hours > 0) {
            return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        } else {
            return `${minutes}:${seconds.toString().padStart(2, '0')}`;
        }
    };

    return (
        <div className="timer">
            <div className="timer__controls">
                <input
                    type="text"
                    value={timeInput}
                    onChange={(e) => setTimeInput(e.target.value)}
                    className="timer__input"
                    placeholder="Enter time (e.g., 1:30:00, 5:00, 90)"
                />
                <button className="timer__button" onClick={handleStart}>Start</button>
                <button className="timer__button" onClick={handleStop}>Stop</button>
                <button className="timer__button" onClick={handleReset}>Reset</button>
            </div>
            <div className="timer__container">
                <CountdownCircleTimer
                    key={timerKey}
                    isPlaying={isRunning}
                    duration={duration}
                    colors="#FF0000"
                    onComplete={handleStop}
                    size={380}
                    strokeWidth={25}
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