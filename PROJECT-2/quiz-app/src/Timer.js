import React, { useEffect, useState } from 'react';

function Timer({ duration, onTimeOut }) {
    const [timeLeft, setTimeLeft] = useState(duration);

    useEffect(() => {
        if (timeLeft > 0) {
            const timer = setInterval(() => {
                setTimeLeft(timeLeft - 1);
            }, 1000);

            return () => clearInterval(timer);
        } else {
            onTimeOut();
        }
    }, [timeLeft, onTimeOut]);

    return <div className="timer">{timeLeft} seconds remaining</div>;
}

export default Timer;