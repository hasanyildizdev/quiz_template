import './style.css';
import React, {Component} from "react";
import { Navigate, Link } from 'react-router-dom';

export default class Timer extends Component{
    constructor(props) {
        super(props);
        this.state = {
          redirect: false
        };
      }
    
      componentDidMount() {
        setTimeout(() => {
          this.setState({ redirect: true });
        }, 3000);
      }
    

    render() {
        if (this.state.redirect) {
            return <Navigate to={'/quiz'} />;
        }

        return (
            <div className="bg">
                <div className='rowTop'>
                    <div className='questionNr'> 7 / 7 </div>
                    <Link style={{ textDecoration: 'none' }} to={'/'}> 
                       <button  id='exitButon' className='exitButton'>X</button>
                    </Link>
                </div>

                <div className='timer_div'>
                    <img  src="/img/timer.webp" alt="Logo"/>
                </div>
            </div>
        )
    }
}