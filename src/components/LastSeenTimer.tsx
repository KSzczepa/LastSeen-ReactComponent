
import React, {useState, useEffect} from 'react';

type TimerProps = {
    enteredData: number
}

const Timer = ({enteredData}: TimerProps) => {

    const [currentTimestamp, setCurrentTimestampTime] = useState(Math.floor(new Date().getTime()/1000.0));


    const setCurrentTimestampTimeHandler = () => {
        setCurrentTimestampTime(Math.floor(new Date().getTime()/1000.0));
    };


    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTimestampTimeHandler();
          }, 1000);
        
          return () => clearInterval(interval);
    }, [enteredData])
    

    const calcHowMuchTimePassed = () => {
        if (enteredData > currentTimestamp) {
            return <p>That will be the future! Please enter the value lesser than current timestamp.</p>
        }
        else {
            return (enteredData !== 0)?(((currentTimestamp-enteredData) < 60) ? <p>{currentTimestamp-enteredData} sec ago.</p> : <p>{Math.floor((currentTimestamp-enteredData)/60)} min ago.</p>) : '';
        }
        
    }


    return <div>
            <p>{currentTimestamp} seconds since 01 January 1970.</p>
            {calcHowMuchTimePassed()}
        </div>
}


export default Timer;