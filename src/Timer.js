import React, { Component } from 'react';
import './Timer.scss';
import confetti from './images/confetti.gif';
import hourglass from './images/hourglass.gif';
export default class Timer extends Component {

    state = {
        minutes: 3,
        seconds: 0
    }

    componentDidMount() {
        this.myInterval = setInterval(() => {
            const { seconds, minutes } = this.state

            if (seconds > 0) {
                this.setState(({ seconds }) => ({
                    seconds: seconds - 1
                }))
            }

            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(this.myInterval)
                } else {
                    this.setState(({ minutes }) => ({
                        minutes: minutes - 1,
                        seconds: 59
                    }))
                }
            }
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.myInterval)
    }

    render() {
        const { minutes, seconds } = this.state

        return (
            <div>
                { minutes === 0 && seconds === 0
                    ? <div>
                        <img src={confetti} alt="confetti" />
                        <h1>Times Up!</h1>
                    </div>
                    :
                    <div>
                        <img src={hourglass} alt="hourglass" />
                        <h1>Time Remaining: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1>
                    </div>
                }
            </div>
        )
    }
}