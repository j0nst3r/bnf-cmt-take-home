import React from "react";

var QuizQuestion = (props) =>{
	
	var questionSection = <div>{props.currentQuestion.question}</div>;
	var answerSection;
	
	switch(props.currentQuestion.type){
		case 'mc':
			answerSection = props.currentQuestion.answers.map((ele, index)=> {
					return (
							<div htmlFor="answerChoice" key={index}>
								<input type="radio" name="answerChoice" value={ele} 
									checked={ele===props.currentAnswer}
									onChange={props.onChange}/>
								{ele}
							</div>
							
							)
				})
				
			break;
		case 'sSelect':
		case 'mSelect':
		case 'fillIn':
		case 'openEnd':
		default:
			break;
	}
	return(
		<form>
			{questionSection}
			{answerSection}
		</form>
	)
	
}
 
export{
	QuizQuestion
};
