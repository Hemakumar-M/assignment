// About.js
import {IoMdArrowRoundBack} from 'react-icons/io'
import './index.css' // Import the CSS file

const About = props => {
  const {history} = props

  return (
    <div className="about-container">
      <div>
        <button type="button" onClick={history.goBack} className="back-btn">
          <IoMdArrowRoundBack size={30} />
        </button>
      </div>

      <div className="about-content">
        <h2>About Me</h2>
        <p className="about-p">
          Hi, I'm <span className="highlight">Hemakumar</span>, an aspiring
          frontend developer passionate about creating user-friendly and
          visually appealing web applications.
        </p>

        <div className="section">
          <h3>Skills</h3>
          <ul className="about-p">
            <li>HTML5, CSS3, JavaScript (ES6+)</li>
            <li>React.js</li>
            <li>Responsive Web Design</li>
            <li>Version Control (Git)</li>
            {/* Add more skills as needed */}
          </ul>
        </div>

        <div className="section">
          <h3>Projects</h3>
          <p className="about-p">
            I have worked on various frontend projects to apply and enhance my
            skills. Some of my notable projects include:
            <ul className="about-p">
              <li className="li">
                <span className="highlight">Todo Application</span> -{' '}
                <a href="https://hemakumar.ccbp.tech" target="_black">
                  hemakumar.ccbp.tech
                </a>
              </li>
              <li>
                <span className="highlight">Wikipedia Search Application</span>-{' '}
                <a href="https://newprojects.ccbp.tech" target="_black">
                  newprojects.ccbp.tech
                </a>
              </li>
              <li>
                <span className="highlight">Book Hub (Goodreads Clone)</span>-{' '}
                <a href="https://projectlinks.ccbp.tech" target="_black">
                  projectlinks.ccbp.tech
                </a>
              </li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
