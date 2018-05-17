import React, { Component } from "react";
import QuizApp from "./QuizApp";
 
class Main extends Component {
  render() {
    return (
		<div>
			<header>
			  <h1 style={{padding:"10px"}}>Benefit Cosmetic Quiz App</h1>
			</header>
			<QuizApp>
			</QuizApp>
			<footer>
			</footer>
		</div>
    );
  }
}
 
export default Main;