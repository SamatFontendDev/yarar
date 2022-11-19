import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import {Routes, Route} from 'react-router-dom'
import Home from "./pages/Home"
import Offers from "./pages/Offers"
import Mail from "./pages/Mail"
import Calendar from "./pages/Calendar"
import {useSelector} from 'react-redux'

const App = () => {
  const mobileMenu = useSelector(state => state.mobileMenu)

  return(
   <div className={`wrapper ${mobileMenu ? 'hidden' : ''}`}>
      <div className="maincontent">
        <Header/>
        <Sidebar/>
        <div className="page">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/offers" element={<Offers/>} />
            <Route path="/mail" element={<Mail/>} />
            <Route path="/calendar" element={<Calendar/>} />
          </Routes>
        </div>
      </div>
   </div>
  )
}

export default App