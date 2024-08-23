import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sign from "./pages/Sign";
const App = () => {
  return (
    <>
     <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign" element={<Sign />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
