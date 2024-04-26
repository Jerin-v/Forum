import { useState } from 'react'
import './App.css'
import { Link, useRoutes} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <div className="header">
          <h1>Tech Talks</h1>
          <Link to="/"><button className="headerBtn"> Home </button></Link>
          <Link to="/new"><button className="headerBtn"> New Post </button></Link>
        </div>
    </div>
  )
}

export default App
