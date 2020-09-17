import React, { Component } from 'react'
import Lottie from 'react-lottie'
import animationData from '../Lotties/3.json'

class ControlledLottie extends Component {
    state = { isStopped: false, isPaused: false }

    render() {
        const buttonStyle = {
            display: 'inline-block',
            margin: '15px auto',
            marginRight: '15px',
            border: 'none',
            color: 'white',
            backgroundColor: '#647DFF',
            borderRadius: '5px',
            fontSize: '15px',
            padding: '15px'

        };

        const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: animationData,
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice'
            }
        };

        return (
            <div className="controlled">
                <h1>Controlled Lottie</h1>
                <Lottie options={defaultOptions}
                    height={400}
                    width={400}
                    isStopped={this.state.isStopped}
                    isPaused={this.state.isPaused}
                />
                <button style={buttonStyle} onClick={() => this.setState({ isStopped: true })}>Stop</button>
                <button style={buttonStyle} onClick={() => this.setState({ isStopped: false, isPaused: false })}>Play</button>
                <button style={buttonStyle} onClick={() => this.setState({ isPaused: !this.state.isPaused })}>Pause</button>
            </div>
        )
    }
}

export default ControlledLottie