import './About.css';
import propertyImage from '../../assets/property-thumbnail.jpg';
import happyCoworkersImg from '../../assets/happyCoworkersImg.jpg';
import ourVisionImg from '../../assets/ourVisionImg.jpg';

function About() {
    return (
        <div className="about-page">


            <div className="about-section animate-in">
                <div className="about-grid">
                    <div className="about-image">
                        <img src={ourVisionImg} alt="Our Vision" />
                    </div>
                    <div className="about-content">
                        <h2>Our Vision</h2>
                        <p>
                            We started with a simple belief: finding a home should be an exciting journey, not a stressful task.
                            Our team combines decades of industry experience with cutting-edge technology to provide you with the most accurate market insights.
                        </p>
                        <p>
                            Whether you are buying your first home, selling a cherished property, or looking for a rental, we are here to guide you every step of the way.
                        </p>
                    </div>
                </div>

                <div className="about-grid reversed">
                    <div className="about-content">
                        <h2>Why We Are Different</h2>
                        <p>
                            Unlike traditional agencies, we prioritize building relationships over closing deals. We take the time to understand your unique needs,
                            ensuring that every recommendation is tailored specifically to you.
                        </p>
                        <p>
                            Our platform offers exclusive listings, virtual tours, and a seamless digital application process that puts you in control.
                        </p>
                    </div>
                    <div className="about-image">
                        <img src={happyCoworkersImg} alt="Our Difference" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About
