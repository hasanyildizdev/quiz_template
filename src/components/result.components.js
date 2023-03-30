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
                    <div className='buttonResult'>
                        <div> Yanlış cevap: 6 </div>
                        <div className='result_icon_wrong'> 
                            <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" ><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg> 
                        </div> 
                    </div>
                    <div className='buttonResult'>
                        <div> Doğru cevap: 1  </div>
                        <div className='result_icons_true'> 
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>    
                        </div> 
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