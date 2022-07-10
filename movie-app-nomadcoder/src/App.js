import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom"
import Home from "./routes/Home"
import Detail from "./routes/Detail"

function App() {
  console.log(":: App.js ::")
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Detail />} />
      </Routes>
    </HashRouter>
  )
}

export default App;