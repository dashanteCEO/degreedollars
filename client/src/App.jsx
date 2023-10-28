import Login from "./components/Auth/login";
import Home from "./components/Home/home";
import Header from "./components/header";
import PageNotFound from "./components/pageNotFound";
import { BrowserRouter as Router, Routes, Route
} from 'react-router-dom';

function App() {
  return (
    <div className="min-h-screen">
      <Header/>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='*' element={<PageNotFound/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
