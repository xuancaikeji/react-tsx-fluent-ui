
import "./index.css"
import * as React from "react";
import {Down} from "../../components"
import Survey from "../Down/Survey/survey"
import Ask from "../Down/Ask/ask"
import Comment from "../Down/Comment/comment"
import {  Route, Link , Switch} from "react-router-dom"
import { Contont } from "../Contont/contont"
export default class Hello extends React.Component<any, any>{
    public constructor(props: any) {
        super(props);
    }
    public render() {
        return (
            <div className="container">
                <>
                    <div className="top"></div>
                    <div className="topfoot"></div>
                </>
                <div className="header">
                    <h1>闪电突袭: 红警围城</h1>
                </div>
                <div className="nav">
                    <Link to='/header'>SELECTED GAME</Link> <p>·  </p>
                    <Link to='/over'>策略</Link> <p>、</p>
                    <Link to='/over'>角色扮演</Link>
                </div>
                <ul className="listone">
                    <li><span></span> <img src="/src/image/icon1.png" alt="" /><a>共享</a></li>
                    <li><img src="/src/image/icon2.png" alt="" /><a>官方俱乐部</a></li>
                    <li><img src="/src/image/icon3.png" alt="" /><a>愿望清单</a></li>
                </ul>
                <div>
                    <div className="star">
                        <p>174</p>
                    </div>
                   
                    <ul className="num">
                        <li><h1>IARC</h1>
                            <h2>3+</h2></li>
                        <li>3+</li>
                    </ul>
                    <div className="line"></div>
                    <div className="buy">
                        <p>+提供应用内购买</p>
                        <p>你可以在xbox One主机上购买。（你所<br />在的
               地区不支持通过microfoft.com购<br />买。）</p>
                        <p className="line"></p>
                        <p>致敬红色警戒，黑化二战巅峰巨作！</p>
                        <Contont />

                    </div>
                    <Down />
                    < Switch>
                   
                    <Route path="/survey" component={Survey} />
                    <Route path="/ask" component={Ask} />
                    <Route path="/comment" component={Comment} />
                    <Route path="/" component={Survey} />
                    </Switch>
                  
                </div>

            </div>
        );
    }
}