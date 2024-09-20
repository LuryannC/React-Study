import { Fragment, useRef, useState } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({title, targetTime}) {
    // const [timerStarted, setTimerStarted] = useState(false);
    // const [timerExpired, setTimerExpired ] = useState(false);

    const timer = useRef();
    const dialog = useRef();

    const [timeRemaining, settimeRemaining ] = useState(targetTime * 1000);
    
    const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

    if(timeRemaining <= 0){
        clearInterval(timer.current);
        dialog.current.open();
    }

    function handleReset(){
        settimeRemaining(targetTime * 1000);
    }

    function handleStart(){
        // setTimerStarted(true);

        // timer.current = setTimeout(() => {       
        //       setTimerExpired(true);
        //       dialog.current.open();
        // }, targetTime * 1000);

        // Execute every x miliseconds
        timer.current = setInterval(() => {       
            settimeRemaining((prevTimeRemaining) => prevTimeRemaining - 10 );
      }, 10);
    }

    function handleStop(){
        // clearTimeout(timer.current);
        dialog.current.open();
        clearInterval(timer.current);
    }

    return (
    <Fragment>
        <ResultModal ref={dialog} targetTime={targetTime} remainingTime={timeRemaining} onReset={handleReset} />
        <section className="challenge">
            <h2>{title}</h2>
            <p className="challenge-time">
                {targetTime} second{targetTime > 1 ? 's' : ''}
            </p>
            <p>
                <button onClick={timerIsActive ? handleStop : handleStart}>
                    {timerIsActive ? 'Stop' : 'Start'} Challenge
                </button>
            </p>
            <p className={timerIsActive ? 'active' : undefined}>
                {timerIsActive ? 'Time is running' : 'Timer inactive' } 
            </p>
        </section>
    </Fragment>
    );
}