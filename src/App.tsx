import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomepageScreen from "@/screens/HomepageScreen.tsx";
import ApplicationScreen from "@/screens/ApplicationScreen.tsx";


function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={
                  <HomepageScreen />
              } />
              <Route path="/about" element={
                  <ApplicationScreen />
              } />
          </Routes>
      </BrowserRouter>
  )
}

export default App
