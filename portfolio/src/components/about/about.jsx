import './about.css';

const About = () => {
    return (
        <div className='about'>
            <div className='about-title'>
                <h1>About me</h1>
            </div>
            <div className='about-section'>
                <div className='about-left'></div>
                <div className='about-right'>
                    <div className='about-para'>
                        <p>Hello there! Im a passionate full-stack developer who recently graduated from Fullstack Academy in March 2024. With a previous background in the service industry spanning over 8 years, transitioning from the service industry to tech was an exciting journey for me. While the service industry taught me valuable skills in customer service, teamwork, and adaptability, I was drawn to the tech industry for its endless possibilities and innovations.</p>
                        <p>Living in the vibrant city of Boulder, Colorado, Im captivated by the dynamic tech community that surrounds me. The collaborative spirit, the culture of innovation, and the constant pursuit of knowledge are what intrigue me the most about the new age of technology. In the tech industry, I found an environment where creativity is celebrated, challenges are embraced, and learning never stops.</p>
                        <p>With a strong foundation in both front-end and back-end development, I bring creativity, technical expertise, and a love for problem-solving to every project I undertake. Throughout my journey, Ive had the opportunity to work on a diverse range of projects, from building robust web applications to crafting elegant user interfaces. My skill set includes proficiency in JavaScript, React, Node.js, Express.js, SQL/NoSQL databases, and more.</p>
                        <p>When Im not honing my coding skills, youll often find me outdoors, chasing the sun on hiking trails, paddleboarding on serene waters, or practicing flow art, also known as performative object manipulation. Im incredibly motivated and driven, always seeking opportunities for growth and learning. I believe in embracing lifes adventures and continuously pushing myself outside of my comfort zone.</p>
                        <p>Feel free to explore my portfolio to learn more about my work, projects, and experiences. Im always open to new opportunities and collaborations, so please dont hesitate to reach out. Lets build something amazing together!</p>
                    </div>
                    <div className='about-skills'>
                        <div className='about-skill'>
                            <p>HTML</p>
                            <hr style={{width: '50%'}} />
                        </div>
                        <div className='about-skill'>
                            <p>CSS</p>
                            <hr style={{width: '50%'}} />
                        </div>
                        <div className='about-skill'>
                            <p>Javascript</p>
                            <hr style={{width: '50%'}} />
                        </div>
                        <div className='about-skill'>
                            <p>React JS</p>
                            <hr style={{width: '50%'}} />
                        </div>
                        <div className='about-skill'>
                            <p>PostgreSQL</p>
                            <hr style={{width: '50%'}} />
                        </div>
                        <div className='about-skill'>
                            <p>Express JS</p>
                            <hr style={{width: '50%'}} />
                        </div>
                        <div className='about-skill'>
                            <p>Node JS</p>
                            <hr style={{width: '50%'}} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='about-achievements'>
                <div className='about-achievement'>
                    <h1>Education</h1>
                    <p>FullStack Academy 2023-2024 (six month online coding bootcamp) </p>
                    <p>Arapahoe Community College 2021-2022</p>
                    <p>Front Range Community College 2019-2020</p>                
                </div>
            </div>
        </div>
    );
}

export default About;
