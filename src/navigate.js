import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Home from './pages/Home.jsx'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function Navigate() {
  return (
<>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="signin" element={<Signin/>} />
          <Route path="signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>

</>
   
  );
}

export default Navigate;
