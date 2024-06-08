
import './App.scss'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Landing from "./pages/Landing/Landing"
import Home from "./pages/Home/Home"

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
