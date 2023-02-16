import React from "react";
import "./App.css";
import Tooltip from "./Tooltip";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            position: "top",
            hovering: false,
        };
    }

    // for position handling function
    handleClick = (pos) => {
        this.setState({
            position: pos,
        });
    };

    // handleMouseEnter function which handle the hovering condintion
    handleMouseEnter = () => {
        this.setState({
            hovering: true,
        });
    };

    // handleMouseLeave function which handle the hovering condintion
    handleMouseLeave = () => {
        this.setState({
            hovering: false,
        });
    };

    // rendering all componenets
    render() {
        return (
            <div className="App">
                <div className="btn-position">
                    <div className="name">Tooltip(React)</div>
                    <div className = "grp-name"> Select the position of the hovering :- </div>
                    <button
                        className={this.state.position === "top" ? "btn active" : "btn"}
                        onClick={(e) => {
                        this.handleClick("top");
                        }}
                    >
                    TOP
                    </button>
                    <button
                        className = {this.state.position === "left" ? "btn active" : "btn"}
                                onClick={(e) => {
                                this.handleClick("left");
                        }}
                    >
                        LEFT
                    </button>
                    <button
                        className={this.state.position === "right" ? "btn active" : "btn"}
                        onClick={(e) => {
                        this.handleClick("right");
                        }}
                    >
                        RIGHT
                    </button>
                    <button
                        className={this.state.position === "down" ? "btn active" : "btn"}
                        onClick={(e) => {
                        this.handleClick("down");
                        }}
                    >
                        DOWN
                    </button>
                </div>
                {" "}
                <div id="button-container">
                    <button
                        className="btn hover-btn"
                        onMouseOver={this.handleMouseEnter}
                        onMouseOut={this.handleMouseLeave}
                    >
                        Hover Over Me!
                    </button>
                    { this.state.hovering && <Tooltip position={this.state.position} />}
                </div>
            </div>
        );
    }
}

export default App;
