import React, { Component } from 'react';
import "./App.css";
import Questions from "./questionAnswers";
import QuestionGenerator from './questionGenerator';

class QuizApp extends Component {

    state = {
        questions: [],
        score: 0,
        responses: 0,
    };

    getQuestions = () => {
        Questions().then((question) => {
            this.setState({
                questions: question,
            })
        })
    }
    computerScore = (answer, rightAnswer) => {
        if (answer === rightAnswer) {
            this.setState({
                score: this.state.score + 1,
            })
        }
        this.setState({
            responses: this.state.responses + 1,
        });

    }

    componentDidMount() {
        this.getQuestions();
    }

    render() {
        return (
            <div className='quizBox'>
                <div className='quizHeader'><h3>QUIZ</h3></div>
                {
                    this.state.responses < 5 ?
                        this.state.questions.map((questionObjcet) => (
                            <QuestionGenerator question={questionObjcet.question} answers={questionObjcet.answers}
                                correctAnswer={questionObjcet.rightAnswer}
                                selected={(answer) => this.computerScore(answer, questionObjcet.rightAnswer)}
                                rightAnswerflag = {this.state.rightAnswerflag}
                            />
                        )) : <div><h1>Your score is : {this.state.score}/5</h1>
                        <input type="button" className="btn btn-success tryAgain" value="Try again" onClick={()=>window.location.reload(false)}/></div>}
            </div>
        );
    }
}

export default QuizApp;