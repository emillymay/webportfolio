// hero.jsx
import './hero.css';

const Hero = () => {
    return (
        <div className='hero'>
            <h1><span>Im Emily May Thomas,</span> a full-stack developer based in Boulder, Colorado.</h1>
            <p>
                Hello, and welcome to my web portfolio! Im a passionate full-stack developer who recently graduated from Fullstack Academy in March 2024. With a strong foundation in both front-end and back-end development, I bring creativity, technical expertise, and a love for problem-solving to every project I undertake.
                I currently reside in the vibrant city of Boulder, Colorado, where I draw inspiration from the breathtaking landscapes and the dynamic tech community that surrounds me.

                Throughout my journey, Ive had the opportunity to work on a diverse range of projects, from building robust web applications to crafting elegant user interfaces. My skill set includes proficiency in JavaScript, React, Node.js, Express.js, SQL/NoSQL databases, and more.

                Im deeply committed to continuous learning and staying updated with the latest technologies and best practices in the ever-evolving world of web development. Whether its creating intuitive user experiences or optimizing server-side performance, I thrive on turning ideas into reality and delivering exceptional results.

                Feel free to explore my portfolio to learn more about my work, projects, and experiences. Im always open to new opportunities and collaborations, so please dont hesitate to reach out. Lets build something amazing together!
            </p>
            <div className='hero-action'>
                <div className='hero-connect'>Connect with me</div> 
                <div className='hero-resume'>My resume</div>
            </div>
        </div>
    );
};

export default Hero;
