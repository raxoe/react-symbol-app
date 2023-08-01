import './App.css';
import PageNotFound from './components/PageNotFound';
import Header from './components/common/Header';
import { Routes, Route } from 'react-router-dom';
 import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';

function App() {
  return (
    <div className='container-fluid'>
      <Header />

      {/* <Routes>
        <Route exact path="/" component={HomePage}></Route>
        |
        <Route path="/aboutpage" component={AboutPage}></Route>
        |
        <Route component={PageNotFound}/>
      </Routes> */}

      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/AboutPage" element={<AboutPage />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
