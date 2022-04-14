import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './containers/Login/Login.jsx';
import Register from './containers/Register/Register.jsx';
import News from './containers/News/News.jsx';
import AddNew from './containers/AddNew/AddNew.jsx';
import Archived from './containers/Archived/Archived.jsx';
import Header from './components/Header/Header.jsx'
import './App.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/addnews" element={<AddNew/>}></Route>
          <Route path="/" element={<News/>}></Route>
          <Route path="/archived" element={<Archived/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
