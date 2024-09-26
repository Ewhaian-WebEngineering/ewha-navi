import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "../src/components/style/GlobalStyle";
import Home from "./components/views/Home";
import Search from "./components/views/Search/index";
import ReviewWritingPage from "./components/views/reviewWritingPage/ReviewWriting";
import Test from "./components/views/test/test";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/search" element={<Search />} />
          <Route exact path="/review-write" element={<ReviewWritingPage />} />
          <Route exact path="/test" element={<Test />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
