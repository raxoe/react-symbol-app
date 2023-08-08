import './App.css';
import PageNotFound from './components/PageNotFound';
import Header from './components/common/Header';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import GeneralTesting from './components/about/GeneralTesting'
import CoursesPage from './components/courses/CoursesPage';

function App() {
  return (
    <div className='container-fluid'>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/CoursesPage" element={<CoursesPage />}></Route>
        <Route path="/AboutPage" element={<AboutPage />}></Route>
        <Route path="/GeneralTesting" element={<GeneralTesting />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
