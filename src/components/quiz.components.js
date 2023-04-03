import './style.css';
import React, { Component } from "react";
import { Link } from 'react-router-dom';
import music from './music';

export default class Game extends Component {

  constructor(props) {
    super(props);
    this.i = 0;
    this.id = null;
    this.state = {
      correctCartVisible: false,
      wrongCartVisible: false,
      timeisup_visible: false,
      question_visible: true,
      selectedAnswer: null,
      questions: [''],
      answers: [''],
      correctAnswers: [''],
    };
  }

  componentDidMount() {
    this.move();
    music.playMusic();

    fetch('http://localhost:3001/questions')
      .then(response => response.json())
      .then(data => {
        this.setState({ questions: data });
      })
      .catch(error => console.error(error));

    fetch('http://localhost:3001/answers')
      .then(response => response.json())
      .then(data => {
        this.setState({ answers: data });
      })
      .catch(error => console.error(error));

    fetch('http://localhost:3001/correct_answers')
      .then(response => response.json())
      .then(data => {
        this.setState({ correctAnswers: data });
      })
      .catch(error => console.error(error));
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
        let remainingTime = 11000 - elapsedTime;
        let progress = elapsedTime / 10100; // 10 seconds
        if (progress > 1) {
          clearInterval(id);
          elem.style.width = "100%";
          let correctAnswer = this.state.correctAnswers.find((a) => a.question_id === 1)['correct_answer_id'];
          document.getElementById(correctAnswer).style.backgroundColor = "rgba(0, 255, 0, 0.5)";

          music.stopMusic();
          music.playTimeUp();
          this.setState({ timeisup_visible: true })
          setTimeout(() => {
            this.i = 0;
            this.setState({ timeisup_visible: false });
            document.getElementById(correctAnswer).style.backgroundColor = "#16076E";
            this.setState({ selectedAnswer: null });
            this.move();
            music.playMusic();
          }, 2500);
        } else {
          elem.style.width = progress * 100 + "%";
          let countDown = Math.floor(remainingTime / 1000);
          let timerElem = document.getElementById("timer");
          if (countDown < oldCountDown) {
            timerElem.textContent = countDown;
            oldCountDown = countDown;
          }
        }
      }
    }
  }


  answered(answer) {
    let score = 0;
    let time = document.getElementById("timer").innerText;
    let correctAnswer = this.state.correctAnswers.find((a) => a.question_id === 1)['correct_answer_id'];
    
    music.stopMusic();
    clearInterval(this.id);

    if (answer === correctAnswer) {
      music.playCorrect();
      this.setState({ correctCartVisible: true });
      document.getElementById(answer).style.backgroundColor = "rgba(0, 255, 0, 0.5)";
      if (time >= 5) { score = 10 + 2; }
      else { score = 10; }
    }
    else {
      music.playWrong();
      this.setState({ wrongCartVisible: true });
      document.getElementById(answer).style.backgroundColor = "rgba(255, 0, 0, 0.5)";
      document.getElementById(correctAnswer).style.backgroundColor = "rgba(0, 255, 0, 0.5)";
      score = 0;
    }

    setTimeout(() => {
      this.i = 0;
      document.getElementById(answer).style.backgroundColor = "#16076E";
      document.getElementById(correctAnswer).style.backgroundColor = "#16076E";
      this.setState({ wrongCartVisible: false });
      this.setState({ correctCartVisible: false });
      this.setState({ selectedAnswer: null });
      music.playMusic();
      this.move();
    }, 3000);

    console.log(score);
  }

  handleExitClick() {
    music.stopMusic();
    clearInterval(this.id);
    this.i = 0;
  }


  render() {

    return (
      <div className="bg">

        <div className='rowTop'>
          <div className='questionNr'> 7 / 7 </div>

          <div id='timeisup' className='answeredCart' style={{ display: this.state.timeisup_visible ? 'block' : 'none' }}>
            <img src="/img/timer.webp" alt="Logo" />
          </div>

          <div id='correct' className='answeredCart' style={{ display: this.state.correctCartVisible ? 'block' : 'none' }}>
            <img src="/img/correct.png" alt="Correct" />
          </div>

          <div id='wrong' className='answeredCart' style={{ display: this.state.wrongCartVisible ? 'block' : 'none' }}>
            <img src="/img/wrong.png" alt="Wrong" />
          </div>

          <Link style={{ textDecoration: 'none' }} to={'/'}>
            <button id='exitButon' className='exitButton' onClick={() => { this.handleExitClick(); }}>
              X
            </button>
          </Link>
        </div>

        <div id='question_div' style={{ display: this.state.question_visible ? 'block' : 'none' }}>
          <div className='timer'>
            <p id="timer">10</p>
            <div id='myProgress' className="myProgress">
              <div id='myBar' className="myBar"></div>
            </div>
            <svg fill='#E6BE43' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><g data-name="Layer 3"><path d="M19.09 19.07h5.48a1 1 0 1 0 0-2H19.09a1 1 0 0 0 0 2zM14.79 25.88h9.26a1 1 0 0 0 0-2H14.79a1 1 0 0 0 0 2zM10.58 32.69H24.3a1 1 0 1 0 0-2H10.58a1 1 0 1 0 0 2zM25.57 38.49a1 1 0 0 0-1-1H5.76a1 1 0 0 0 0 2H24.57A1 1 0 0 0 25.57 38.49zM24.59 45.3a1 1 0 0 0-1-1H11a1 1 0 0 0 0 2H23.59A1 1 0 0 0 24.59 45.3zM24.57 51.11H19.09a1 1 0 0 0 0 2h5.48a1 1 0 1 0 0-2zM32.7 38.52a3.6 3.6 0 0 0 2.13-.7l.1-.09 10.26-9.92a1 1 0 0 0-1.09-1.64l-12.31 5.3-1 .43a.82.82 0 0 0-.2.12 3.6 3.6 0 0 0 2.14 6.5z"></path><path d="M54.54,16.08a1,1,0,0,0,.71.3,1,1,0,0,0,.71-.3l3-3a1,1,0,0,0,.3-.7,1,1,0,0,0-.3-.71L55.77,8.47a1,1,0,0,0-1.41,0l-3,3a1,1,0,0,0,0,1.41l1,.95-2.11,2.1A25.88,25.88,0,0,0,36.25,9.42v-1h2.66a1,1,0,0,0,1-1V4a1,1,0,0,0-1-1H27.22a1,1,0,0,0-1,1V7.47a1,1,0,0,0,1,1h2.66v.87a23.53,23.53,0,0,0-3.67.68A1,1,0,0,0,26.72,12a22.72,22.72,0,0,1,4.12-.69h0l.2,0,.66,0h0v1.18a1,1,0,0,0,2,0V11.2a23.71,23.71,0,0,1,10,2.68h0l-.6,1a1,1,0,0,0,1.73,1l.6-1a23.72,23.72,0,0,1,7.37,7.34h0l-1.09.63a1,1,0,0,0,1,1.73l1.11-.64A23.5,23.5,0,0,1,56.63,34H55.3a1,1,0,0,0,0,2h1.34A23.82,23.82,0,0,1,54,46.14l-1.19-.69a1,1,0,1,0-1,1.73l1.19.68h0a24,24,0,0,1-7.4,7.41h0l-.7-1.21a1,1,0,0,0-1.73,1l.7,1.21A23.74,23.74,0,0,1,33.67,59h0v-1.4a1,1,0,0,0-2,0V59a23.29,23.29,0,0,1-4.95-.74,1,1,0,0,0-1.22.71,1,1,0,0,0,.71,1.23,25.9,25.9,0,0,0,25.4-42.82l2.1-2.1Z"></path></g></svg>
          </div>

          <div className='question'>
            {this.state.questions[0].text}
          </div>

          <div>
            <div className='answer_row'>
              <button id='1' className={`answer ${this.state.selectedAnswer === 1 && 'selected'}`} onClick={() => { this.setState({ selectedAnswer: 1 }); this.answered(1); }}>
                {this.state.answers.find((a) => a.option === 1)?.text}
              </button>
              <button id='2' className={`answer ${this.state.selectedAnswer === 2 && 'selected'}`} onClick={() => { this.setState({ selectedAnswer: 2 }); this.answered(2); }}>
                {this.state.answers.find((a) => a.option === 2)?.text}
              </button>
            </div>
            <div className='answer_row'>
              <button id='3' className={`answer ${this.state.selectedAnswer === 3 && 'selected'}`} onClick={() => { this.setState({ selectedAnswer: 3 }); this.answered(3); }}>
                {this.state.answers.find((a) => a.option === 3)?.text}
              </button>
              <button id='4' className={`answer ${this.state.selectedAnswer === 4 && 'selected'}`} onClick={() => { this.setState({ selectedAnswer: 4 }); this.answered(4); }}>
                {this.state.answers.find((a) => a.option === 4)?.text}
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

