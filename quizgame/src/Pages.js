import React from "react";

const startPageButton = {
	display: "block",
	margin: "0 auto"
}

const pageText = {
	textAlign:"center"
}


var StartPage = (props) => {
	return(
			<div>
				<div className="jumbotron jumbotron-fluid">
					<p className="lead" style={pageText}>Press start to begin the quiz</p>
					<button className="btn btn-primary" style={startPageButton} onClick={props.onClick}>Start</button>
				</div>
			</div>
		)
}

var CompletionPage = (props) => {
	return(
			<div>
				<div className="jumbotron jumbotron-fluid">
					<p className="lead" style={pageText}>Thank you for taking the quiz :D</p>
					<p className="lead" style={pageText}>You answered {props.numCorrect} correctly</p>
				</div>
			</div>
		)
}

export{
	StartPage,
	CompletionPage
};