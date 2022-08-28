import React, { useState } from 'react'
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import Resume from './components/pages/Resume';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  // Conditionally render page based on handelPageChange function
  const [currentPage, setCurrentPage] = useState('Home');
  const renderPage = () => {
    if(currentPage === 'Projects') {
      return <Projects />;
    }
    else if(currentPage === 'Resume') {
      return <Resume />;
    } else {
      return <Home />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange}/>
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;
