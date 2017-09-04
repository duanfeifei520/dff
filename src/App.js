import React, { Component } from 'react';

class TimeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            time: Math.round(new Date().getTime()/1000) - 1497367980,
        });

        setInterval(() => {
            this.setState({
                time: Math.round(new Date().getTime()/1000) - 1497367980,
            });
        }, 200);
    }

    handleTime() {
        let timeStamp = this.state.time;
        let days = Math.floor(timeStamp/(24*3600));
        let hours = Math.floor((timeStamp - days * 24 * 3600) / 3600);
        hours = hours <= 9 ? "0" + hours : hours;
        let minutes = Math.floor((timeStamp - days * 24 * 3600 - hours * 3600) / 60);
        minutes = minutes <= 9 ? "0" + minutes : minutes;
        let seconds = timeStamp - days * 24 * 3600 - hours * 3600 - minutes * 60;
        seconds = seconds <= 9 ? "0" + seconds : seconds;
        let items = [];
        items.push(timeStamp, days, hours, minutes, seconds);
        return items;
    }

    render() {
        return (
            <div className="text">
                <div className="textAlgin">
                    <strong>亲爱的</strong>
                </div>
                <div className="textAlgin">
                    <strong>我们在一起</strong>
                </div>
                <div className="textAlgin">{this.handleTime()[1]} 天</div>
                <div className="textAlgin">{this.handleTime()[2]} 小时</div>
                <div className="textAlgin">{this.handleTime()[3]} 分钟</div>
                <div className="textAlgin">{this.handleTime()[4]} 秒</div>
                <div className="textAlgin">
                    <strong>了😘</strong>
                </div>
            </div>
        );
    }
} //倒计时 在本项目中未使用

class App extends Component {
  render() {
    return (
        <div className="bg">
            <div className="heart">
            </div>
            <div className="fixMarginTop">
                <TimeComponent/>
            </div>
        </div>
    );
  }
}

export default App;
