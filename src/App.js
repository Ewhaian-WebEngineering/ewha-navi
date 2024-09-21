import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/views/Home";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;