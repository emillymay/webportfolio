// hero.jsx
import './hero.css';

const Hero = () => {
    return (
        <div className='hero'>
            <h1><span>Im Emily May Thomas,</span> a full-stack developer based in Boulder, Colorado.</h1>
            <p>
                Welcome to my web portfolio!
            </p>
            <div className='hero-action'>
                <div className='hero-connect'>Connect with me</div> 
                <div className='hero-resume'>My resume</div>
            </div>
        </div>
    );
};

export default Hero;
