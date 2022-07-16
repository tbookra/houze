import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import ProductListing from './components/ProductListing';
import ErrorPage from './components/ErrorPage'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element = {<ProductListing />} />
          <Route path="*" element = {<ErrorPage />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
