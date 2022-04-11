import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './containers/Home/Home.jsx'
import Register from './containers/Register/Register.jsx'
import News from './containers/News/News.jsx'
import './App.scss';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          {/* <Route path="/login" element={<Login/>}></Route> */}
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/news" element={<News/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
