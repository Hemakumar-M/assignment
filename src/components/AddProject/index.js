import {useState} from 'react'
import Loader from 'react-loader-spinner'
import Context from '../../Context'
import './index.css'

const AddProject = () => {
  const [textArea, setTextarea] = useState('')
  const [ProjectName, setProjectName] = useState('')
  const [ProjectLink, setProjectLink] = useState('')
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  return (
    <Context.Consumer>
      {value => {
        const {Add} = value
        const changeTextArea = e => {
          setTextarea(e.target.value)
        }

        const changeProjectLink = e => {
          setProjectLink(e.target.value)
        }
        const changeProjectName = e => {
          setProjectName(e.target.value)
        }
        const submit = e => {
          e.preventDefault()
          if (ProjectLink !== '' && ProjectName !== '' && textArea !== '') {
            setError(false)
            setLoading(true)
            setSuccess(false)

            setTimeout(() => {
              Add({ProjectName, ProjectLink, textArea})
              setLoading(false)
              setSuccess(true)
              setProjectLink('')
              setProjectName('')
              setTextarea('')
            }, 900)
          } else {
            setError(true)
            setLoading(false)
            setSuccess(false)
          }
        }

        return (
          <>
            <h1 className="heading-add-project">Add Project</h1>
            <div className="add-project-container">
              <form className="form" onSubmit={submit}>
                <label htmlFor="project" className="label-heading">
                  Project Name
                </label>
                <input
                  type="text"
                  className="text-input"
                  id="project"
                  onChange={changeProjectName}
                  value={ProjectName}
                />
                <label htmlFor=" Project Link" className="label-heading">
                  Project Link
                </label>
                <input
                  type="url"
                  className="text-input"
                  id=" Project Link"
                  onChange={changeProjectLink}
                  value={ProjectLink}
                />

                <label htmlFor="Description" className="label-heading">
                  Description
                </label>
                <textarea
                  onChange={changeTextArea}
                  rows="5"
                  cols="33"
                  id="Description"
                  className="textarea"
                  value={textArea}
                  maxLength="150"
                >
                  {textArea}
                </textarea>
                <button className="project-buttons" type="submit">
                  {loading ? (
                    <Loader
                      type="TailSpin"
                      width="15"
                      height="15"
                      color="black"
                    />
                  ) : (
                    'Add'
                  )}
                </button>
                {error && (
                  <p className="error">
                    *All text fields must be filled mandatory
                  </p>
                )}
                {success && (
                  <p className="success">Successfully added to project List</p>
                )}
              </form>
            </div>
          </>
        )
      }}
    </Context.Consumer>
  )
}

export default AddProject
