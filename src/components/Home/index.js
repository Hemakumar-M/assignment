import {useState} from 'react'
import {Link} from 'react-router-dom'
import {IoMdMenu} from 'react-icons/io'
import {ImCancelCircle} from 'react-icons/im'
import AddProject from '../AddProject'
import Footer from '../Footer'
import './index.css'

const Home = () => {
  const [menuOpen, setMenu] = useState(false)

  const ChangeMenu = () => {
    setMenu(preview => setMenu(!preview))
  }

  return (
    <div className="home-container">
      <div className="home-body">
        <div className="home-left">
          <div className="left-header">
            <h1 className="header-heading first">
              <Link to="/" className="nav-link">
                Hemakumar
              </Link>
            </h1>
            <button className="menu-btn" type="button" onClick={ChangeMenu}>
              {menuOpen ? <ImCancelCircle size={25} /> : <IoMdMenu size={25} />}
            </button>
          </div>
          {menuOpen && (
            <div className="menu-open none">
              <ul className="header-ul new-ui">
                <li className="list">
                  <Link to="/about" className="nav-link">
                    About
                  </Link>
                </li>
                <li className="list">
                  <Link to="/projects" className="nav-link">
                    Projects
                  </Link>
                </li>
                <li className="list">
                  <Link to="/contact" className="nav-link">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          )}
          <div className="home-content">
            <p className="yellow-heading">UX/UI DESIGNER</p>
            <h1 className="home-heading text-center">
              Hello, my name is <span className="name">Hemakumar</span>
            </h1>
            <p className="paragraph">
              I am Proficient in HTML, CSS, and JavaScript, React js dedicated
              to crafting engaging digital experiences.
            </p>
            <div className="home-buttons">
              <Link to="/projects" className="nav-link">
                <button type="button" className="project-buttons">
                  Projects
                </button>
              </Link>
              <button type="button" className="project-buttons linkedin-button">
                Linkdin
              </button>
            </div>
          </div>
        </div>
        <div className="home-right">
          <div className="right-header">
            <ul className="header-ul">
              <li className="list">
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </li>
              <li className="list">
                <Link to="/projects" className="nav-link">
                  Projects
                </Link>
              </li>
              <li className="list">
                <Link to="/contact" className="nav-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <AddProject />
      <Footer />
    </div>
  )
}

export default Home
