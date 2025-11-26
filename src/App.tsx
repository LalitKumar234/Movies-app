import { Route, Routes } from "react-router-dom"
import Home from "./views/home"
import MovieDetailsScreen from "./views/MovieDetailsScreen"

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie-detail/:id" element={<MovieDetailsScreen />} />
      </Routes>
  )
}

export default App
