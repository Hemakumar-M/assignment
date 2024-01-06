import {useState} from 'react'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import {v4} from 'uuid'
import Context from './Context'
import Home from './components/Home'
import Projects from './components/Projects'
import NotFound from './components/NotFound'

import './App.css'
import About from './components/About'

const Data = [
  {
    id: v4(),
    ProjectName: 'Todo Application',
    ProjectLink: 'https://hemakumar.ccbp.tech/',
    textArea: `A robust task tracking system with CRUD capabilities, crafted to simplify task management.
        Designed with HTML, CSS and Bootstrap to ensure a user-friendly interface for managing tasks.`,
    photo:
      'https://nkb-backend-media-static-tenxiitian.s3.ap-south-1.amazonaws.com/tenxiitian_prod/programs/Tech+Programs/frontend-content/ccbp/coding-practice-questions/dynamic-webapps/todo-application-part-4-v1.gif',
  },
  {
    id: v4(),
    ProjectName: 'Wikipedia Search Application',
    ProjectLink: 'https://newprojects.ccbp.tech/',
    textArea: `Developed custom wikipedia search application where user can search and view curated results and can see
detailed explanation in wikipedia by clicking on the specific result`,
    photo:
      'https://nkb-backend-media-static-tenxiitian.s3.ap-south-1.amazonaws.com/tenxiitian_prod/programs/Tech+Programs/frontend-content/ccbp/coding-practice-questions/dynamic-webapps/wikipedia-search-application-v1.gif',
  },
  {
    id: v4(),
    ProjectName: 'Book Hub (Goodreads Clone)',
    ProjectLink: 'https://projectlinks.ccbp.tech/',
    textArea: `Designed a comprehensive book management platform, inspired by Goodreads Implemented advanced features such as login, home, bookshelves, search, and rating with React Router,
React Rating Stars, React Select, and fetch APIs.`,
    photo:
      'https://res.cloudinary.com/deq8p5pmi/image/upload/v1694768613/Rectangle_1467_vewfxn.png',
  },
]

const App = () => {
  const [allData, setData] = useState(Data)
  const Add = e => {
    const a = e
    a.photo =
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmirI4PxLNSAAUf4tBZCiZjUtwrpt9oVu6NIshLIdqjNK9wWcjXgtWRr81WMbgJ7HuVlc&usqp=CAU'
    a.id = v4()
    setData(old => [...old, a])
  }

  return (
    <Context.Provider value={{Add, allData}}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/about" component={About} />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </BrowserRouter>
    </Context.Provider>
  )
}

export default App
