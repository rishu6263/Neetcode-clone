
import {BrowserRouter as Router ,Routes,Route} from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
function App() {
 

  return (
    <>
      <Navbar />
      <Router>
        
        <Routes>
        <Route path="/" element={<Home />} />
    
      </Routes>
      </Router>
    </>
  )
}

export default App
