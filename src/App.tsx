
import './App.scss'
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import Landing from "./pages/Landing/Landing"
import Home from "./pages/Home/Home"
import Footer from './components/Footer/Footer'
import Error404 from './pages/Error404/Error404'
import Weather from './components/Weather/Weather'
import ScrollArrow from './components/ScrollArrow/ScrollArrow'
import Music from './pages/Music/Music'

console.log(
  '%c🌐 Want a stunning website? 🚀 %cReach out to%c Joe Young %cjoseph.m.young2@gmail.com',
  'color: #51355a; font-size: 18px; font-weight: bold; text-shadow: 2px 2px 4px rgba(81, 53, 90, 0.5);',
  'color: #3498db; font-size: 18px; font-weight: bold; text-decoration: underline;',
  'color: #e74c3c; font-size: 18px; font-weight: bold;',
  'color: #e67e22; font-size: 18px; font-weight: bold;'
);

const App = () => {
  const location = useLocation();
  const mainLayout = location.pathname !== "/welcome"

  return (
    <>

      <Routes>
        <Route path="/welcome" element={<Landing />} />
        <Route path="/" element={<Home />} />
        <Route path="/music" element={<Music />} />
        {/* <Route path="/weather" element={<Weather />} /> */}
        <Route path="*" element={<Error404 />} />
      </Routes>
      {/* {mainLayout && <Footer />} */}
      {mainLayout && <ScrollArrow />}

    </>
  )
}

const AppWrapper = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
}

export default AppWrapper
