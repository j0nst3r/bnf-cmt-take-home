import React, { Component } from "react";
import quizKey from "./data/quizKey.js";
import {StartPage, CompletionPage} from "./Pages.js";
import {QuizQuestion} from "./QuizContent.js";

const quizBackground = {
    backgroundColor: "yellow",
};




 
class Quiz extends Component {
	constructor(props) {
		super(props);
		this.state = {	questionTemplate: quizKey.questions,
						currentQuestion: 1,
						numCorrect: 0,
						userAnswer: [],
						completed: false,
						started: false};	
		this.handleNextClick = this.handleNextClick.bind(this);
		this.handleStartQuiz = this.handleStartQuiz.bind(this);
		this.handleUserAnswer = this.handleUserAnswer.bind(this);
		this.updateScore = this.updateScore.bind(this);
		
		this.state.userAnswer = new Array(quizKey.length);
	}
	
	handleNextClick(event){
		
		var newState = this.state
		
		if(!this.state.userAnswer[this.state.currentQuestion-1]){
			window.alert("must answer question before proceeding");
			return;
		}
		
		newState.completed = this.state.currentQuestion==this.state.questionTemplate.length
		newState.currentQuestion += 1;
		
		this.setState(newState, this.updateScore);
		
	}
	
	handleStartQuiz(event){
		this.setState({started: !this.state.started});
	}
	
	handleUserAnswer(event){
		var updatedUserAnswer = this.state.userAnswer;
		updatedUserAnswer[this.state.currentQuestion - 1] = event.currentTarget.value;	
		this.setState({
			userAnswer: updatedUserAnswer
        });
	}
	
	updateScore(){
		var prevQuestNum = this.state.currentQuestion-1;		
		let userAnswer = this.state.userAnswer[prevQuestNum-1]
		let correctAnswer = this.state.questionTemplate[prevQuestNum-1].key
		
		var updatedNumCorrect = this.state.numCorrect;
		updatedNumCorrect += userAnswer===correctAnswer ? 1 : 0;
		
		this.setState({numCorrect: updatedNumCorrect})
	}
	
	render() {
		var navButtonText = this.state.currentQuestion != this.state.questionTemplate.length
			? "Next"
			: "Complete"	
		
		var currentQuestion = this.state.questionTemplate[this.state.currentQuestion-1];
		var currentAnswer = this.state.userAnswer[this.state.currentQuestion-1];
		
		var content = !this.state.started
			? <StartPage onClick={this.handleStartQuiz}></StartPage>
			: this.state.completed
				? <CompletionPage numCorrect={this.state.numCorrect}></CompletionPage>
				: <div className="row">
					<div className="col" style={quizBackground}>
						<div>
							<label> Question {this.state.currentQuestion} of {this.state.questionTemplate.length}</label>
							<label style={{float:"right"}}> Score: {this.state.numCorrect}/{this.state.questionTemplate.length}</label>
						</div>
						<QuizQuestion key={this.state.currentQuestion}
							currentAnswer={currentAnswer}
							currentQuestion={currentQuestion}
							onChange={this.handleUserAnswer}>
						</QuizQuestion>
						<div>
							<button type="button"
								className="btn btn-primary"
								style={{float:"right"}}
								onClick={this.handleNextClick}>
								{navButtonText}
							</button>
						</div>
					</div>
				</div>
		
		return (
			<div className="container">
				{content}
			</div>
		);
	}
}
 
export default Quiz;