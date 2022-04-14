import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './containers/Home/Home.jsx';
import Login from './containers/Login/Login.jsx';
import Register from './containers/Register/Register.jsx';
import News from './containers/News/News.jsx';
import Archived from './containers/Archived/Archived.jsx';
import Header from './components/Header/Header.jsx'
import './App.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/news" element={<News/>}></Route>
          <Route path="/archived" element={<Archived/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
