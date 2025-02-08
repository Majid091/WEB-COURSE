import './App.css'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Home from './components/Home'
import About from './components/About'
import Dashboard from './components/Dashboard'
import Navbar from './components/Navbar'
import Courses from './components/Courses'
import Titles from './components/Titles'
import Students from './components/Students'

const router = createBrowserRouter(
  [
    {
      path:"/",
      element:
      <div>
        <Navbar/>
        <Home/>
      </div>
    },
    {
      path:"/about",
      element:
      <div>
        <Navbar/>
        <About/>
      </div>
    },
    {
      path:"/dashboard",
      element:
      <div>
        <Navbar/>
        <Dashboard/>
      </div>,
      children:
      [
        {
          path: "courses",
          element: <Courses/>
        },
        {
          path: "titles",
          element: <Titles/>
        },
        {
          path: "students",
          element: <Students/>
        }
      ]
    }
  ]
)





function App() {

  return (
    <RouterProvider router={router}/>
  )
}

export default App
