import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Artists from "./pages/Artists"
import Artist from "./pages/Artist"
import Home from "./pages/Home"
import Songs from "./pages/Songs"
import Song from "./pages/Song"

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/artists/:id" element={<Artist />} />
        <Route path="/songs" element={<Songs />} />
        <Route path="/songs/:id" element={<Song />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
