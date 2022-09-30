import { Button } from 'primereact/button';
import logo from '../LionLowPoly4.png';
import '../css/Hero.css';
import * as Locale from '../strings/index';

function Hero() {
    return (
        <div id="home" style={{ minHeight: "85vh", display: "flex", alignItems: 'center', padding: "15px" }}>
            <div className="Hero-container">
                <div className='Hero-info'>
                    <h1>{Locale.HeroHeader}</h1>
                    <p>{Locale.HeroBody}</p>
                    <a href='#mission'>
                        <button label="Learn More" type="button" className='Hero-button-filled'>Learn More</button>
                    </a>
                    <a href='https://friendzone.coplay.io/'>
                        <button label="Live Demo" type="button" className="Hero-button-outlined">Live Demo</button>
                    </a>
                </div>

                <div className='Hero-image-container'>
                    <img src={logo} alt="hero-1" className='Hero-image' />
                </div>
            </div>
        </div>
    );
}

export default Hero;