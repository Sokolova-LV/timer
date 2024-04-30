import React, { useState, useEffect } from "react";
import { Block, Btn, Container, Input, Span, Title, Wrap } from './Timer.styled';

export const Timer = () => {
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [isTimerFinished, setIsTimerFinished] = useState(false);
    const [isInputValid, setIsInputValid] = useState(false);

    const startTimer = () => {
        setIsRunning(true);
        setIsTimerFinished(false);
    };

    const stopTimer = () => {
        setIsRunning(false);
    };

    const resetTimer = () => {
        setMinutes(0);
        setSeconds(0);
        setIsRunning(false);
        setIsTimerFinished(false);
    };

    useEffect(() => {
        setIsInputValid(minutes > 0 || seconds > 0);
    }, [minutes, seconds]);

    useEffect(() => {
        let totalSeconds = minutes * 60 + seconds;
        let timerId;

        if (isRunning) {
            timerId = setInterval(() => {
                totalSeconds -= 1;

                if (totalSeconds <= 0) {
                    clearInterval(timerId);
                    setIsRunning(false);
                    setIsTimerFinished(true);
                    alert("Time is over!");
                }

                const newMinutes = Math.floor(totalSeconds / 60);
                const newSeconds = totalSeconds % 60;

                setMinutes(newMinutes);
                setSeconds(newSeconds);
            }, 1000);
        } else {
            clearInterval(timerId);
        }

        return () => clearInterval(timerId);
    }, [isRunning, minutes, seconds]);
    
    return (
        <Container isTimerFinished={isTimerFinished}>
            <Title>TIMER</Title>
            <Wrap>
                <Input type="number"
                    value={minutes}
                    onChange={(e) => setMinutes(parseInt(e.target.value))}
                    min="0"
                    isTimerFinished={isTimerFinished}
                />
                <Span>:</Span>
                <Input type="number"
                    value={seconds}
                    onChange={(e) => setSeconds(parseInt(e.target.value))}
                    min="0"
                    max="59"
                    isTimerFinished={isTimerFinished}
                />
            </Wrap>
            <Block>
                <Btn onClick={startTimer} disabled={!isInputValid}>START</Btn>
                <Btn onClick={stopTimer}>STOP</Btn>
                <Btn onClick={resetTimer}>RESET</Btn>
            </Block>
        </Container>
    );
};