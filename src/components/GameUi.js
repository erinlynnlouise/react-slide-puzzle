import React from 'react';

const GameUi = props => (

    <div className="nav" style={props.navStyle}>
        <button onClick={props.hintClick} style={props.buttonStyle}>Hint</button>
        <button onClick={props.solveClick} style={props.buttonStyle}>Solve</button>
        <button onClick={props.newClick} style={props.buttonStyle}>New</button>
        <button onClick={props.sizeClick} style={props.buttonStyle}>{props.otherSize} piece puzzle</button>

    </div>

);

export default GameUi;