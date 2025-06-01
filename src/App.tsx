import './App.scss'

import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom"

import AllReviews from './pages/AllReviews/AllReviews'
import Error404 from './pages/Error404/Error404'
import Home from "./pages/Home/Home"
import Landing from "./pages/Landing/Landing"
import Music from './pages/Music/Music'
import ProgressBar from './components/ProgressBar/ProgressBar'
import ScrollArrow from './components/ScrollArrow/ScrollArrow'
import Timer from './components/Timer/Timer'
import Timer2 from './components/Timer2/Timer2'
import Weather from './components/Weather/Weather'

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
      {mainLayout && <ProgressBar />}
      <Routes>
        <Route path="/welcome" element={<Landing />} />
        <Route path="/" element={<Home />} />
        <Route path="/music" element={<Music />} />
        <Route path="*" element={<Error404 />} />
        <Route path="/weather" element={<Weather />} />
        <Route path='/timer' element={<Timer />} />
        <Route path='/timer2' element={<Timer2 />} />
        <Route path="/all-reviews" element={<AllReviews />} />
      </Routes>
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
