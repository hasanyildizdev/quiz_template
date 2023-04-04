import './style.css';
import React, {Component} from "react";
import axios from 'axios';

export default class Admin extends Component{
    constructor(props){
        super(props);

        this.onChangeQuestion = this.onChangeQuestion.bind(this);
        this.onChangeA = this.onChangeA.bind(this);
        this.onChangeB = this.onChangeB.bind(this);
        this.onChangeC = this.onChangeC.bind(this);
        this.onChangeD = this.onChangeD.bind(this);
        this.onChangeCorrectAnswer = this.onChangeCorrectAnswer.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state={
            question : '',
            option_1 : '',
            option_2 : '',
            option_3 : '',
            option_4 : '',
            correct_answer_id : '',
            questionsList : [],
            answerList: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3001/questions')
            .then(response => {
                this.setState({ questionsList: response.data });
            })
            .catch((error) => {
                console.log(error);
            });
        axios.get('http://localhost:3001/answers')
            .then(response => {
                this.setState({ answerList: response.data });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    onChangeQuestion(e){
        this.setState({
            question: e.target.value
        });
    }
    onChangeA(e){
        this.setState({
            option_1: e.target.value
        });
    }
    onChangeB(e){
        this.setState({
            option_2: e.target.value
        });
    }
    onChangeC(e){
        this.setState({
            option_3: e.target.value
        });
    }
    onChangeD(e){
        this.setState({
            option_4: e.target.value
        });
    }
    onChangeCorrectAnswer(e){
        this.setState({
            correct_answer_id: e.target.value
        });
    }

    onSubmit = async (e) => {
        e.preventDefault();
        const questionItem ={
            question : this.state.question,
            option_1 : this.state.option_1,
            option_2 : this.state.option_2,
            option_3 : this.state.option_3,
            option_4 : this.state.option_4,
            correct_answer_id : this.state.correct_answer_id,
        }

        try {
            axios.post('http://localhost:3001/questions/add',questionItem);
            alert("Added Successfully"); 
            return window.location = '/admin';
        } catch (error) {
            return alert("Something went wrong! Error: "+error);
        }
        
    }

    onDeleteQuestion = async (question_Id) => {
        if(window.confirm("Are you sure you want to delete this question?")){
            try {
                axios.delete(`http://localhost:3001/questions/delete/${question_Id}`);
                alert("Deleted Successfully");
                return window.location = '/admin';
            } catch (error) {
                alert("Something went wrong! Error: "+error);
            }
        }
    }


    render() {
        return (
            <div className='admin_bg'>
                <div>
                <h3>Add New Question</h3>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group-admin">
                            <input
                                placeholder='Question'
                                type="text"
                                required
                                value={this.state.question}
                                onChange={this.onChangeQuestion}
                            />
                        </div>
                        <div className="form-group-admin">
                            <input
                                placeholder='Answer 1'
                                type="text"
                                required
                                value={this.state.option_1}
                                onChange={this.onChangeA}
                            />
                        </div>
                        <div className="form-group-admin">
                            <input
                                placeholder='Answer 2'
                                type="text"
                                required
                                value={this.state.option_2}
                                onChange={this.onChangeB}
                            />
                        </div>
                        <div className="form-group-admin">
                            <input
                                placeholder='Answer 3'
                                type="text"
                                required
                                value={this.state.option_3}
                                onChange={this.onChangeC}
                            />
                        </div>
                        <div className="form-group-admin">
                            <input
                                placeholder='Answer 4'                            
                                type="text"
                                required
                                value={this.state.option_4}
                                onChange={this.onChangeD}
                            />
                        </div>
                        <div className="form-group-admin">
                            <input
                                placeholder='Correct Answer Number (1-4)'
                                type="number"
                                required
                                value={this.state.correct_answer_id}
                                onChange={this.onChangeCorrectAnswer}
                            />
                        </div>
                    
                        <div className="form-admin-submit-button">
                            <input type="submit" value="Add Question"/>
                        </div>
                    </form>
                </div>

                <div className="questionList">
                    <h3>Question List</h3>
                    <table className='table'>
                        <thead>
                            <tr>   
                                <th>Nr</th>
                                <th>Question</th>
                                <th>Answer 1</th>
                                <th>Answer 2</th>
                                <th>Answer 3</th>
                                <th>Answer 4</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.questionsList.map((question_id, index) => (
                                <tr key={index}>
                                    <td>{index +1}</td>
                                    <td>{this.state.questionsList[index].text}</td>
                                    <td>{this.state.answerList.find((a) => a.question_id === index+1 && a.option === 1)?.text}</td>
                                    <td>{this.state.answerList.find((a) => a.question_id === index+1 && a.option === 2)?.text}</td>
                                    <td>{this.state.answerList.find((a) => a.question_id === index+1 && a.option === 3)?.text}</td>
                                    <td>{this.state.answerList.find((a) => a.question_id === index+1 && a.option === 4)?.text}</td>
                                    <td><button className='deleteQestionButton' onClick={() => this.onDeleteQuestion(index+1)}> Delete </button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                </div>
            </div>
        )
    }
}