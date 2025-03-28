import { useState, useEffect } from 'react'
import './App.css'
import Project from './Project.jsx'

function App() {
  // const [count, setCount] = useState(0)
   const [projects, setProjects] = useState([])

  useEffect(() => {
     //  live api call get json as below
     // fetch('http://localhost/api/projects').then((response) => response.json()).then(projects => {
     // static json file
    fetch('projects.json').then((response) => response.json()).then(projects => {
      // console.log(projects);
    setProjects(projects);
    })
  }, [])

  return (
    <>
      <h1>Laravel API Project List</h1>
      {
        projects.map((project, index)=> (
          
          <Project  project={project} key={index}/>
      ))
      }
    </>
  
  )
}

export default App
