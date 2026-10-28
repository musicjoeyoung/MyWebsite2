import "./Timer2.scss"

import { useEffect, useState } from "react";

function Timer2() {
    const [timer, setTimer] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        let countdownInterval: ReturnType<typeof setInterval> | undefined;
        if (timer > 0 && !isPaused) {
            countdownInterval = setInterval(() => {
                setTimer((prevTimer) => prevTimer - 1);
            }, 1000);
        } else {
            clearInterval(countdownInterval);
        }
        return () => clearInterval(countdownInterval);
    }, [timer, isPaused]);

    const handleStart = () => {
        if (!timer || isPaused) {
            const totalSeconds = hours * 3600 + minutes * 60 + seconds;
            setTimer(totalSeconds);
            setIsPaused(false);
        }
    };

    const handleStop = () => {
        setHours(0);
        setMinutes(0);
        setSeconds(0);
        setTimer(0);
        setIsPaused(false);
    };

    const handlePause = () => {
        setIsPaused((prevIsPaused) => !prevIsPaused);
    };

    /*  const handleResume = () => {
         setIsPaused(false);
     }; */

    const handleReset = () => {
        setHours(0);
        setMinutes(0);
        setSeconds(0);
        setTimer(0);
        setIsPaused(false);
    };

    return (
        <main className="timerContainer" id="main-content" tabIndex={-1}>
            <h1>Countdown Timer</h1>
            <div className="timerContainer__inputContainer">
                <div>
                    <label className="timerContainer__label" htmlFor="timer-hours">Hours</label>
                    <input
                        id="timer-hours"
                        className="timerContainer__input"
                        type="number"
                        min="0"
                        step="1"
                        value={hours}
                        onChange={(e) => setHours(Number(e.target.value) || 0)}
                    />
                </div>
                <div>
                    <label className="timerContainer__label" htmlFor="timer-minutes">Minutes</label>
                    <input
                        id="timer-minutes"
                        type="number"
                        min="0"
                        max="59"
                        step="1"
                        value={minutes}
                        onChange={(e) => setMinutes(Number(e.target.value) || 0)}
                    />
                </div>
                <div>
                    <label className="timerContainer__label" htmlFor="timer-seconds">Seconds</label>
                    <input
                        id="timer-seconds"
                        type="number"
                        min="0"
                        max="59"
                        step="1"
                        value={seconds}
                        onChange={(e) => setSeconds(Number(e.target.value) || 0)}
                    />
                </div>
            </div>
            <div className="buttonContainer">
                <button
                    type="button"
                    onClick={handleStart}
                    className=""
                >
                    {!timer || isPaused ? "Start" : "Resume"}
                </button>
                <button
                    type="button"
                    onClick={handleStop}
                    className=""
                >
                    Stop
                </button>
                <button
                    type="button"
                    onClick={handlePause}
                    className="buttonContainer__button"
                    disabled={!timer || isPaused}
                >
                    Pause
                </button>
                {/*         <button
          onClick={handleResume}
          className="buttonContainer__button}
          disabled={!isPaused}
        >
          Resume
        </button> */}
                <button
                    type="button"
                    onClick={handleReset}
                    className="buttonContainer__button"
                    disabled={!timer}
                >
                    Reset
                </button>
            </div>
            {
                timer > 0 ? (
                    <div className="floatZoom" role="timer" aria-label="Time remaining" aria-live="off">
                        <h2 className="floatZoom__h2">
                            {Math.floor(timer / 3600)} : {Math.floor((timer % 3600) / 60)} :{" "}
                            {timer % 60}
                        </h2>
                    </div>
                ) : (
                    <h2 className="floatZoom__h2">Timer Complete</h2>
                )
            }
        </main >
    );
}

export default Timer2;
