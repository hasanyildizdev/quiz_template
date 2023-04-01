import './style.css';
import React, {Component} from "react";
import { Link } from "react-router-dom";

export default class Result extends Component{

    render() {
        return (
            <div className="bg">
                <div className='score'>
                        <h1> 10 </h1>
                        <p>  سکه  </p>
                </div>

                <div className='answer_results'>
                    <div className='buttonResultWrong'>
                        <div> Yanlış: 6 </div>
                    </div>
                    <div className='buttonResultCorrect'>
                        <div> Doğru: 1  </div>
                    </div>
                </div>

                <Link style={{ textDecoration: 'none' }} to={'/'}> 
                    <button className='goProfileButton'>
                        بازگشت به پروفایل   
                    </button>
                </Link>
            </div>
        )
    }
}