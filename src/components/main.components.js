import './style.css';
import React, {Component} from "react";
import { Link } from "react-router-dom";

export default class Main extends Component{
    constructor(props) {
        super(props);
        this.state = {
            showGuideAlert: false,
            showScoreAlert: false,
            showShareAlert: false
        };
        this.handleGuideAlertClick = this.handleGuideAlertClick.bind(this);
        this.handleScoreAlertClick = this.handleScoreAlertClick.bind(this);
        this.handleShareAlertClick = this.handleShareAlertClick.bind(this);
    }
    

    handleGuideAlertClick() {
        this.setState({showGuideAlert: !this.state.showGuideAlert});
    }

    handleScoreAlertClick() {
        this.setState({showScoreAlert: !this.state.showScoreAlert});
    }

    handleShareAlertClick() {
        this.setState({showShareAlert: !this.state.showShareAlert});
    }

    render() {
        return (
            <div className="bg">

                <div className="row">
                    <div className='logo'>
                        <img src="img/logo.webp" alt="Logo"/>
                    </div>
                    <div className="item">
                        <div>
                            <h2 className='title1'>Rewards</h2>
                            <h2 className='title'>0</h2>
                        </div>
                        <div>
                            <img src="img/reward.webp" alt="Reward"/>
                        </div>
                    </div>
                    <div className="item">
                        <div>
                            <h2 className='title1'>Coin</h2>
                            <h2 className='title'>0</h2>
                        </div>
                        <div>
                            <img src="img/coin.webp" alt="Coin"/>                     
                        </div>
                    </div>
                </div>

                <div className="">
                    <button className='button' onClick={this.handleScoreAlertClick}>Skor Tablosu</button>
                    <button className='button' onClick={this.handleGuideAlertClick}>Oyun Kılavuzu</button>
                </div>
                
                <div>
                    <button className='button2' onClick={this.handleShareAlertClick}>Introduce to Friends</button>
                </div>

                <div className='text'>
                    <p>
                        Block 11 Telegram kanalına üye olun, en iyi oyuncular ve ödüllerin duyurulmasından haberdar olun.
                    </p>
                </div>

                <div className='hand_down'>
                    👇 Paraları oynayın ve toplayın
                </div>

                <Link style={{ textDecoration: 'none' }} to={'/quiz/'}> 
                    <button className='playButton'>
                        <img src="img/game_controller.webp" alt="Play"/>
                        <p>Yeni bir oyun başlat</p>
                    </button>
                </Link>

                <div className={`alert ${this.state.showScoreAlert ? 'show' : ''}`}>
                    <h2>تارریخچه امتیازات</h2>
                    <p>
                        3	0	شرکت در بازی	1401/10/5 13:37 <br/>
                        4	20	شرکت در بازی	1401/10/5 13:37 <br/>
                    </p>
                    <button className='alertSubButton' onClick={this.handleScoreAlertClick}>فهمیدم!</button>
                </div>


                <div className={`alert ${this.state.showGuideAlert ? 'show' : ''}`}>
                    <h2>راهنمای بازی</h2>
                    <p>
                        قواعد بازی: <br/>
                        1 - روی دکمه شروع بازی بزن. <br/>
                        2 - به سوالات جواب درست بده. <br/> 
                        3 - با پاسخ های درست سکه و امتیاز بگیر.<br/> 
                        منتظر اعلام زمان قرعه کشی برترین کاربر ها باش برای دریافت جایزه!
                    </p>
                    <button className='alertSubButton' onClick={this.handleGuideAlertClick}>فهمیدم!</button>
                </div>

                <div className={`alert ${this.state.showShareAlert ? 'show' : ''}`}>
                    <h2> معرفی به دوستان </h2>
                    <p>
                        بازی رو به دوستات معرفی کن و 100 امتیاز بگیر! به همین راحتی. <br/>
                        با اشتراک گذاری لینک زیر با دوستات یا شبکه های اجتماعی، هر کاربری که <br/>
                        وارد ربات بشه و روی شروع بازی بزنه 100 امتیاز بهت تعلق میگیره!<br/> 
                        <br/>
                        <strong> لینک معرفی شما</strong> 
                    </p>
                    <div className='shareInput'>
                       {/*  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="w-4 h-4 inline-block"><path stroke-linecap="round" stroke-linejoin="round" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg> */}
                        <input type="text" name="price" readonly="" class="block w-full text-left rounded-md border border-indigo-300 bg-gray-100 pl-14 py-2  focus:border-indigo-500 focus:ring-indigo-500 text-xs" value="https://t.me/AdamAppBot?start=5060482288" tabindex="0"/>   
                    </div>
                    <button className='alertSubButton' onClick={this.handleShareAlertClick}>فهمیدم!</button>
                </div>

                <div className={`blackCover ${this.state.showGuideAlert ? 'show' : ''}`}></div>
                <div className={`blackCover ${this.state.showScoreAlert ? 'show' : ''}`}></div>
                <div className={`blackCover ${this.state.showShareAlert ? 'show' : ''}`}></div>

            </div>
        )
    }
}