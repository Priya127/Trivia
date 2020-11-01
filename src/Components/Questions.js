import React, { Component } from 'react';
import { questions } from '../Data/data';
import { Link } from 'react-router-dom'


export default class Quest extends Component {

    constructor(props) {
        super(props);
        this.state = {
            num: Math.floor(Math.random() * questions.length),
            numArray: [],
            answer: '',
            result: '',
            score: 0,
            color: '#98fb98'
        }
        this.nextPage = this.nextPage.bind(this)

    }


    changeColor() {

        var colors = ['turquoise', 'pink', 'skyblue', '#F5F383', '#98fb98']
        var length = this.state.numArray.length
        var index = length > 4 ? Math.abs(length - 5) : length
        let color = colors[index]
        this.setState({ color: color })
        console.log(index, color)

    }


    nextPage() {

        var num = Math.floor(Math.random() * questions.length)
        for (var i = 0; i < this.state.numArray.length; i++) {

            while (num === this.state.numArray[i]) {
                num = Math.floor(Math.random() * questions.length)
                i = 0
            }
        }
        this.setState({ num: num, result: '' })
        this.changeColor()
    }





    render() {
        var num = this.state.num
        var question = questions[num].question
        var choice1 = questions[num].choice1
        var choice2 = questions[num].choice2
        var choice3 = questions[num].choice3
        var choice4 = questions[num].choice4
        var answer = questions[num].answer
        var correct = questions[num].correct
        var incorrect = questions[num].incorrect

        var buttonStyle = this.state.result ? 'none' : 'inline-block'



        const handleSubmit = (e) => {
            e.preventDefault()
            if (this.state.answer === '') {
                alert('Please choose an option')
            }
            else {

                if (this.state.answer === answer) {
                    this.setState({ result: correct, score: this.state.score + 1 })
                }
                else if (this.state.answer !== answer) {
                    this.setState({ result: incorrect })
                }
                var numArray = this.state.numArray
                numArray.push(this.state.num)
                this.setState({ numArray: numArray, answer: '' })

            }
        }

        const onChange = (e) => this.setState({ answer: e.target.value })


        return (

            <div className='contain'>

                <div className='header1' style={{ backgroundColor: this.state.color }}>

                    <h5>{question}</h5>

                    <form onSubmit={handleSubmit}>
                        <ul type='none'>
                            <li>
                                <input type='radio'
                                    checked={this.state.answer === choice1}
                                    name='choice' onChange={onChange}
                                    value={choice1} />
                                {` ${choice1}`}
                            </li>
                            <li>
                                <input type='radio'
                                    checked={this.state.answer === choice2}
                                    name='choice' onChange={onChange}
                                    value={choice2} />
                                {` ${choice2}`}
                            </li>
                            <li>
                                <input type='radio'
                                    checked={this.state.answer === choice3}
                                    name='choice' onChange={onChange}
                                    value={choice3} />
                                {` ${choice3}`}
                            </li>
                            <li>
                                <input type='radio'
                                    checked={this.state.answer === choice4}
                                    name='choice' onChange={onChange} value={choice4} />
                                {` ${choice4}`}
                            </li>
                        </ul>
                        <button className='butn' style={{ display: buttonStyle }} type='submit'>Submit</button>
                    </form>

                    <div>
                        {this.state.result ? <Result result={this.state.result} nextPage={this.nextPage} numArray={this.state.numArray}
                            score={this.state.score} /> : ''}
                    </div>

                </div>
            </div>

        );
    }
}


export function Result(props) {
    if (props.numArray.length === 10) {
        return (
            <div>
                <p>{props.result}</p>
                <h5>{`Your Score is ${props.score}!`} </h5>
                <Link className='link' to='/'><button className='butn1'>Play Again</button></Link>
            </div>
        )
    }
    else {
        return (
            <div>
                <p>{props.result}</p>
                <button className='butn' onClick={props.nextPage}>Next</button>
            </div>
        )
    }
}