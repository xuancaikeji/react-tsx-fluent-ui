import * as React from "react";
import { Hello, Header } from "./components"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
export default class APP extends React.Component<any, any> {
    constructor(props) {
        super(props)
    }

    render() {
        return (

            <Router>
                <Switch>
                    <Route path="/header" component={Header} />
                    <Route path="/" component={Hello} />
                </Switch>


            </Router>
        );
    }
}