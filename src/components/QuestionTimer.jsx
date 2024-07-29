import { useEffect, useState } from "react";

export default function QuestionTimer({ timeout, onTimeout, mode }) {
    const [remainingTime, setRemainingTime] = useState(timeout);
    
    useEffect(() => {
        console.log('Setting timeout');
        const timer = setTimeout(onTimeout, timeout, mode);

        return () => {
            clearTimeout(timer);
        }
    }, [timeout, onTimeout]);

    useEffect(() => {
        console.log('setting interval');
        const interval = setInterval(() => {
            setRemainingTime(prevRemainingTime => prevRemainingTime -100)
        }, 100);

        return () => {
            clearInterval(interval);
        }
    }, []);

    return (
        <progress 
        id="question-time" 
        value={remainingTime} 
        max={timeout} 
        className={mode}
        />
    )
}