import * as React from "react";
import "./down.css"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
export default class Down extends React.Component<any, any> {
    constructor(props) {
        super(props);


    }

    render() {

        return (
            <div>
                <ul className="down">
                    <li><img src="/src/image/yes.png" alt="" /></li>
                    <li><p>你已拥有此游戏</p></li>
                    <li className="downthree"></li>
                    <li className="downfour"><button>安装</button></li>
                    <li className="downfive">
                        <Chicktop />
                    </li>
                </ul>
                <ul className="downtabs">
                    <li>  <Link to="/survey">概述</Link></li>
                    <li> <Link to="/ask">系统要求</Link></li>
                    <li>  <Link to="/comment">评论</Link></li>

                </ul>


            </div>
        )

    }
}
class Chicktop extends React.Component<any, any>{
    constructor(props) {
        super(props);
        this.state = { display: "none" }

    }
    fun = () => {
        this.setState(function (display) {
            if (display.display == "none") {
                return { display: "block" }
            } else if(display.display=="block"){
                return { display: "none" }

            }

        })

    }

    render() {

        return (
            <div>
                <div style={{ display: this.state.display }}><p>在我的设备上安装</p></div>

                <button onClick={this.fun}>...</button>
            </div>
        )

    }
}


