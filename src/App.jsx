
import {BrowserRouter as Router ,Routes,Route} from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Courses from "./pages/Courses";
import Lessons from "./pages/Lessons";
function App() {
 

  return (
    <>
      <Navbar />
      <Router>
        
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/lessons" element={<Lessons />} />
    
      </Routes>
      </Router>
    </>
  )
}

export default App
