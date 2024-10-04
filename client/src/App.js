import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "../src/components/style/GlobalStyle";
import Home from "./components/views/Home";
import Search from "./components/views/SearchPage/index";
import ReviewWritingPage from "./components/views/ReviewPage/ReviewWriting";
import PathList from "./components/views/PathListPage/PathList"; //빨간줄 뜨는 이슈
import PathMap from "./components/views/PathListPage/PathMap";
import Shuttle from "./components/views/ShuttlePage/Shuttle";
import NavBar from "./components/views/NavBar/NavBar";  

function App() {
  return (
    <div className="App">
      <GlobalStyle /> 
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/search" element={<Search />} />
          <Route exact path="/review-write" element={<ReviewWritingPage />} />
          <Route exact path="/shuttle" element={<Shuttle />} />
          <Route exact path="/path-list" element={<PathList />} />
          <Route exact path="/path-map" element={<PathMap />} />
        </Routes>
        <NavBar /> 
      </BrowserRouter>
    </div>
  );
}
export default App;