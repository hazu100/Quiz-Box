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
                {this.state.userAnswer.map((answer) => (<button
                    onClick={()=> {this.setAnswer(answer); this.props.selected(answer);}}
                  >
                    {answer}</button>))}
            </div>
        );
    }
}

export default QuestionGenerator;