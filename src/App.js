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
        })
    }

    componentDidMount() {
        this.getQuestions();
    }

    render() {
        return (
            <div className='quizBox'>
                <div className='quizHeader'>QUIZ</div>
                {
                    this.state.responses < 5 ?
                        this.state.questions.map((questionObjcet) => (
                            <QuestionGenerator question={questionObjcet.question} answers={questionObjcet.answers}
                                correctAnswer={questionObjcet.rightAnswer}
                                selected={(answer) => this.computerScore(answer, questionObjcet.rightAnswer)}
                            />
                        )) : <h1>Your score is : {this.state.score}/5</h1>}
            </div>
        );
    }
}

export default QuizApp;