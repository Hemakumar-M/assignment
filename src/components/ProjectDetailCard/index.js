import './index.css'

const ProjectDetailCard = props => {
  const {items} = props
  const {ProjectLink, ProjectName, textArea, photo} = items

  return (
    <div className="full">
      <div className="detailCard-div">
        <div className="left-div">
          <div className="content">
            <h1 className="home-heading name center">{ProjectName}</h1>
            <p className="p1 center">{textArea}</p>
            <div className="center-div">
              <a href={ProjectLink} target="_black">
                <button
                  type="button"
                  className="project-buttons linkedin-button"
                >
                  View Project
                </button>
              </a>
            </div>
          </div>
        </div>
        <img src={photo} alt="not found" className="photo-img" width="50%" />
      </div>
    </div>
  )
}

export default ProjectDetailCard
