
import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About'
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume'
import Footer from './components/Footer';
//import Navigation from './components/Navigation';
import './App.css';

function App() {
  const [ currentTab, setCurrentTab ] = useState('About');

  const renderTab = () => {
    switch ( currentTab ) {
      case 'About':
        return <About/>;
      case 'Portfolio':
        return <Portfolio/>;
      case 'Contact':
        return <Contact/>;
      case 'Resume':
        return <Resume/>
      default:
        return null;
    }
  };
  return (
		<div>
	
				<Header currentTab={currentTab} setCurrentTab={setCurrentTab}></Header>
   
    
				<main>{renderTab()}</main>
		
			
				<Footer></Footer>
			
		</div>
	);
}

export default App;