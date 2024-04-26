import { useState } from 'react'
import './App.css'
import { Link, useRoutes} from 'react-router-dom'
import ReadPost from './pages/ReadPost'

function App() {
  const [count, setCount] = useState(0)

  let element = useRoutes([
    {
      path: "/",
      element: <ReadPost/>    
    }
  ])

  return (
    <div>
        <div className="header">
          <h1>Tech Talks</h1>
          <Link to="/"><button className="headerBtn"> Home </button></Link>
          <Link to="/new"><button className="headerBtn"> New Post </button></Link>
        </div>
        {element}
    </div>
  )
}

export default App
