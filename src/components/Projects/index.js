import {IoMdArrowRoundBack} from 'react-icons/io'
import ProjectDetailCard from '../ProjectDetailCard'
import Context from '../../Context'
import Footer from '../Footer'

import './index.css'

const Projects = props => (
  <Context.Consumer>
    {value => {
      const {allData} = value
      const {history} = props

      return (
        <div className="project-container">
          <div>
            <button type="button" onClick={history.goBack} className="back-btn">
              <IoMdArrowRoundBack size={30} />
            </button>
          </div>
          <h1 className="project-heading">Projects</h1>
          <div className="allItems">
            {allData.map(eachItem => (
              <ProjectDetailCard key={eachItem.id} items={eachItem} />
            ))}
          </div>
          <Footer />
        </div>
      )
    }}
  </Context.Consumer>
)

//   const book =
//     'https://res.cloudinary.com/deq8p5pmi/image/upload/v1694768613/Rectangle_1467_vewfxn.png'
//   const search =
//     'https://nkb-backend-media-static-tenxiitian.s3.ap-south-1.amazonaws.com/tenxiitian_prod/programs/Tech+Programs/frontend-content/ccbp/coding-practice-questions/dynamic-webapps/wikipedia-search-application-v1.gif'
//   const apptitude =
//     'https://nkb-backend-media-static-tenxiitian.s3.ap-south-1.amazonaws.com/tenxiitian_prod/programs/Tech+Programs/frontend-content/ccbp/coding-practice-questions/dynamic-webapps/todo-application-part-4-v1.gif'

// <Context.Consumer>
//   {value => {
//     const {Add} = value
//     console.log(Add)

//   <div className="project-container">
//     <h1 className="project-heading">Projects</h1>
//   </div>

//   }}
// </Context.Consumer>
//   )

export default Projects
