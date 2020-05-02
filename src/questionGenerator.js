import React, { Component } from 'react';
import './questionGenerator.css';
class QuestionGenerator extends Component {
    state = {
        userAnswer: [...this.props.answers],
    };

    setAnswer = (answer) => {
        this.setState({
            userAnswer: [answer],
        })
    }
    render() {
        return (
            <div className="questionBox">
                <div>{this.props.question}</div>
                <div className="answerButtons">{this.state.userAnswer.map((answer) => (<input type="button"
                    className="btn btn-info answerButton"
                    onClick={() => { this.setAnswer(answer); this.props.selected(answer); }}
                    value={answer}/>
                    ))}</div>
            </div>
        );
    }
}

export default QuestionGenerator;