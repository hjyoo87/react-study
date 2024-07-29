import { useEffect, useState } from "react";

export default function ProgressBar({ timer }) {
    const [remainingTime, setReaminingTime] = useState(timer);

    useEffect(() => {
        console.log("INTERVAL");
        const interval = setInterval(() => {
            setReaminingTime(prevTime => prevTime - 10);
        }, 10);

        return () => {
            clearInterval(interval);
        }
    }, []);

    return (
        <progress value={remainingTime} max={timer} />
    )
}