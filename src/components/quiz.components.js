import './style.css';
import React, {Component} from "react";
import { Navigate, Link } from 'react-router-dom';
import music from './music';

export default class Game extends Component{

  constructor(props) {
    super(props);
    this.i = 0;
    this.state = {
      redirect: false,
      selectedAnswer: null
    };
    this.id = null;
  }

  move() {
    if (this.i === 0) {
      this.i = 1;
      let elem = document.getElementById("myBar");
      let startTime = Date.now();
      let oldCountDown = 11;
      let id = setInterval(frame.bind(this), 10);
      this.id = id;
      function frame() {
        let elapsedTime = Date.now() - startTime;
        let remainingTime = 10000 - elapsedTime;
        let progress = elapsedTime / 10000; // 10 seconds
        if (progress >= 1) {
          clearInterval(id);
          this.i = 0;
          elem.style.width = "100%";
          this.setState({redirect: true});
        } else {
          elem.style.width = progress * 100 + "%";
          let countDown = Math.floor(remainingTime / 1000) + 1;
          if (countDown < oldCountDown) {
            let timerElem = document.getElementById("timer");
            timerElem.textContent = countDown;
            oldCountDown = countDown;
          }

        }
      }
    }
  }

  handleExitClick() {
    music.stop();
    clearInterval(this.id);
    this.i = 0;
  }

  componentDidMount() {
    this.move();
    music.play(); 
  }

  render() {  
        if (this.state.redirect) {
          music.stop();
          return <Navigate to={'/timer'} />;
        }
        return (
            <div className="bg">
              <div className='rowTop'>
                  <div className='questionNr'> 7 / 7 </div>
                  <Link style={{ textDecoration: 'none' }} to={'/'}> 
                       <button  id='exitButon' className='exitButton' onClick={() =>{this.handleExitClick();}}>
                          X
                       </button>
                  </Link>
              </div>

              <div className='timer'>
                  <p id="timer">10</p>
                  <div id='myProgress' className="myProgress">
                      <div id='myBar' className="myBar"></div>
                  </div>
                  <svg fill='#E6BE43'  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><g data-name="Layer 3"><path d="M19.09 19.07h5.48a1 1 0 1 0 0-2H19.09a1 1 0 0 0 0 2zM14.79 25.88h9.26a1 1 0 0 0 0-2H14.79a1 1 0 0 0 0 2zM10.58 32.69H24.3a1 1 0 1 0 0-2H10.58a1 1 0 1 0 0 2zM25.57 38.49a1 1 0 0 0-1-1H5.76a1 1 0 0 0 0 2H24.57A1 1 0 0 0 25.57 38.49zM24.59 45.3a1 1 0 0 0-1-1H11a1 1 0 0 0 0 2H23.59A1 1 0 0 0 24.59 45.3zM24.57 51.11H19.09a1 1 0 0 0 0 2h5.48a1 1 0 1 0 0-2zM32.7 38.52a3.6 3.6 0 0 0 2.13-.7l.1-.09 10.26-9.92a1 1 0 0 0-1.09-1.64l-12.31 5.3-1 .43a.82.82 0 0 0-.2.12 3.6 3.6 0 0 0 2.14 6.5z"></path><path d="M54.54,16.08a1,1,0,0,0,.71.3,1,1,0,0,0,.71-.3l3-3a1,1,0,0,0,.3-.7,1,1,0,0,0-.3-.71L55.77,8.47a1,1,0,0,0-1.41,0l-3,3a1,1,0,0,0,0,1.41l1,.95-2.11,2.1A25.88,25.88,0,0,0,36.25,9.42v-1h2.66a1,1,0,0,0,1-1V4a1,1,0,0,0-1-1H27.22a1,1,0,0,0-1,1V7.47a1,1,0,0,0,1,1h2.66v.87a23.53,23.53,0,0,0-3.67.68A1,1,0,0,0,26.72,12a22.72,22.72,0,0,1,4.12-.69h0l.2,0,.66,0h0v1.18a1,1,0,0,0,2,0V11.2a23.71,23.71,0,0,1,10,2.68h0l-.6,1a1,1,0,0,0,1.73,1l.6-1a23.72,23.72,0,0,1,7.37,7.34h0l-1.09.63a1,1,0,0,0,1,1.73l1.11-.64A23.5,23.5,0,0,1,56.63,34H55.3a1,1,0,0,0,0,2h1.34A23.82,23.82,0,0,1,54,46.14l-1.19-.69a1,1,0,1,0-1,1.73l1.19.68h0a24,24,0,0,1-7.4,7.41h0l-.7-1.21a1,1,0,0,0-1.73,1l.7,1.21A23.74,23.74,0,0,1,33.67,59h0v-1.4a1,1,0,0,0-2,0V59a23.29,23.29,0,0,1-4.95-.74,1,1,0,0,0-1.22.71,1,1,0,0,0,.71,1.23,25.9,25.9,0,0,0,25.4-42.82l2.1-2.1Z"></path></g></svg>
              </div>

              <div className='question'>
                  کدام روز ها از هفته بازار نقدینگی کمتری دارد
              </div>
              

              <div>
                  <div className='answer_row'> 
                      <button id='answer1' className={`answer ${this.state.selectedAnswer === 1 && 'selected'}`} onClick={() => this.setState({ selectedAnswer: 1 })}>
                        در صورت تایید باز کردن معاملات شورت
                      </button>
                      <button id='answer2' className={`answer ${this.state.selectedAnswer === 2 && 'selected'}`} onClick={() => this.setState({ selectedAnswer: 2 })}>
                        هیچکدام     
                      </button>
                  </div>
                  <div className='answer_row'> 
                      <button id='answer3' className={`answer ${this.state.selectedAnswer === 3 && 'selected'}`} onClick={() => this.setState({ selectedAnswer: 3 })}>
                        در صورت تایید باز کردن معاملات شورت
                      </button>
                      <button id='answer4' className={`answer ${this.state.selectedAnswer === 4 && 'selected'}`} onClick={() => this.setState({ selectedAnswer: 4 })}>
                        هیچکدام     
                      </button>
                  </div>
              </div>

            </div>
        )
    }
}

